import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { LegendGQL } from "../../../types/legend/Legend.ts";
import Component_Header from "../../../components/Components_Data/General_Components/Component_Header.tsx";
import Component_Songs from "../../../components/Components_Data/General_Components/Component_Songs.tsx";
import Component_Albums_I from "../../../components/Components_Data/General_Components/Component_Albums_I.tsx";
import Legend_Component from "../../../components/Components_Data/Specific_Components/Legend_Component.tsx";

type Data = {
    legend: LegendGQL,
}

export const handler: Handlers<Data> = {
    GET: async (_req: Request, ctx: FreshContext<unknown, Data>) =>{
        const id = ctx.params.id;

        const data = await Axios.get<LegendGQL>(`https://ece-i-back-end-ii.deno.dev/legend/id?id=${id}`);
        
        return ctx.render({legend: data.data});
    }
}

const Page = (props: PageProps<Data>) => {
    const legend = props.data.legend;
    const songs = legend.talked_about_in_song;
    const albums = legend.talked_about_in_album;
    
    console.log(legend);

    return (
        <div>
            <Component_Header name={legend.name} type="legend"/>
            <Legend_Component name={legend.name}/>
            <div class="card_songs_albums">
                {
                    songs !== undefined && songs.length !== 0  &&
                    <Component_Songs songs={songs}/>
                }
            </div>
            <div class="card_songs_albums">
                {
                    albums !== undefined && albums.length !== 0  &&
                    <Component_Albums_I albums={albums}/>
                }
            </div>
        </div>
    );
}

export default Page;