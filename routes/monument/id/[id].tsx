import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { MonumentGQL } from "../../../types/history/Monument.ts";
import Component_Header from "../../../components/Components_Data/General_Components/Component_Header.tsx";
import Component_Songs from "../../../components/Components_Data/General_Components/Component_Songs.tsx";
import Component_Albums_I from "../../../components/Components_Data/General_Components/Component_Albums_I.tsx";
import Monument_Component from "../../../components/Components_Data/Specific_Components/Monument_Component.tsx";

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
    const songs = monument.talked_about_in_song;
    const albums = monument.talked_about_in_album;
    
    console.log(monument);

    return (
        <div>
            <Component_Header name={monument.name} type="monument"/>
            <Monument_Component name={monument.name} country_in={monument.country_in} still_exists={monument.still_exists}/>
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