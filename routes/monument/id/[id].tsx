import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { MonumentGQL } from "../../../types/history/Monument.ts";

type Data = {
    monument: MonumentGQL,
}

export const handler: Handlers<Data> = {
    GET: async (_req: Request, ctx: FreshContext<unknown, Data>) =>{
        const id = ctx.params.id;

        const data = await Axios.get<MonumentGQL>(`https://ece-i-back-end-ii.deno.dev/monument/id?id=${id}`);
        
        return ctx.render({monument: data.data});
    }
}

const Page = (props: PageProps<Data>) => {
    const monument = props.data.monument;
    
    console.log(monument);

    return (
        <div>
            <h1>Página del monumento "{monument.name}"</h1>
        </div>
    );
}

export default Page;