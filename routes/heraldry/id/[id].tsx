import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { HeraldryGQL } from "../../../types/history/Heraldry.ts";

type Data = {
    heraldry: HeraldryGQL,
}

export const handler: Handlers<Data> = {
    GET: async (_req: Request, ctx: FreshContext<unknown, Data>) =>{
        const id = ctx.params.id;

        const data = await Axios.get<HeraldryGQL>(`https://ece-i-back-end-ii.deno.dev/heraldry/id?id=${id}`);
        
        return ctx.render({heraldry: data.data});
    }
}

const Page = (props: PageProps<Data>) => {
    const heraldry = props.data.heraldry;

    console.log(heraldry);

    return (
        <div>
            <h1>Página de la heráldica "{heraldry.name}"</h1>
        </div>
    );
}

export default Page;