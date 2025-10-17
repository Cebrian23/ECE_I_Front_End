import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { MithGQL } from "../../../types/legend/Mith.ts";

type Data = {
    mith: MithGQL,
}

export const handler: Handlers<Data> = {
    GET: async (_req: Request, ctx: FreshContext<unknown, Data>) =>{
        const id = ctx.params.id;

        const data = await Axios.get<MithGQL>(`https://ece-i-back-end-ii.deno.dev/mith/id?id=${id}`);
        
        return ctx.render({mith: data.data});
    }
}

const Page = (props: PageProps<Data>) => {
    const mith = props.data.mith;

    console.log(mith);

    return (
        <div>
            <h1>Página del mito "{mith.name}"</h1>
        </div>
    );
}

export default Page;