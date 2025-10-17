import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { BandGQL } from "../../types/music/Band.ts";

type Data = {
    band: BandGQL,
}

export const handler: Handlers<Data> = {
    GET: async (_req: Request, ctx: FreshContext<unknown, Data>) =>{
        const id = ctx.params.id;

        const data = await Axios.get<BandGQL>(`https://ece-i-back-end-ii.deno.dev/band/id?id=${id}`);
        
        return ctx.render({band: data.data});
    }
}

const Page = (props: PageProps<Data>) => {
    const band = props.data.band;

    console.log(band);

    return (
        <div>
            <h1>Página de la banda "{band.name}"</h1>
        </div>
    );
}

export default Page;