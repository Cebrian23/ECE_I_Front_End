import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { BandGQL } from "../../types/music/Band.ts";
import Component_Header from "../../components/Components_Data/General_Components/Component_Header.tsx";
import Component_Albums_II from "../../components/Components_Data/General_Components/Component_Albums_II.tsx";
import Band_Component from "../../components/Components_Data/Specific_Components/Band_Component.tsx";

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
    const albums = band.albums;

    console.log(band);

    return (
        <div>
            <Component_Header name={band.name} type="band"/>
            <Band_Component name={band.name}/>
            <Component_Albums_II albums={albums}/>
        </div>
    );
}

export default Page;