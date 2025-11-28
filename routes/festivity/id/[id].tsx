import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { FestivityGQL } from "../../../types/festivity/Festivity.ts";
import Component_Header from "../../../components/Components_Data/General_Components/Component_Header.tsx";
import Component_Albums_I from "../../../components/Components_Data/General_Components/Component_Albums_I.tsx";
import Component_Songs from "../../../components/Components_Data/General_Components/Component_Songs.tsx";
import Festivity_Component from "../../../components/Components_Data/Specific_Components/Festivity_Component.tsx";

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
    const songs = festivity.talked_about_in_song;
    const albums = festivity.talked_about_in_album;
    
    console.log(festivity);

    return(
        <div>
            <Component_Header name={festivity.name} type="festivity"/>
            <Festivity_Component name={festivity.name} date={festivity.date}/>
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