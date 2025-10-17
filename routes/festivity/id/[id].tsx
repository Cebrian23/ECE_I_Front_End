import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { FestivityGQL } from "../../../types/festivity/Festivity.ts";

type Data = {
    festivity: FestivityGQL,
}

export const handler: Handlers<Data> = {
    GET: async (_req: Request, ctx: FreshContext<unknown, Data>) =>{
        const id = ctx.params.id;

        const data = await Axios.get<FestivityGQL>(`https://ece-i-back-end-ii.deno.dev/festivity/id?id=${id}`);
        
        return ctx.render({festivity: data.data});
    }
}

const Page = (props: PageProps<Data>) => {
    const festivity = props.data.festivity;
    
    console.log(festivity);

    return(
        <div>
            <h1>Página de la festividad "{festivity.name}"</h1>
        </div>
    );
}

export default Page;