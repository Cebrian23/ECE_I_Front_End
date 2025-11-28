import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { HeraldryGQL } from "../../../types/history/Heraldry.ts";
import Component_Header from "../../../components/Components_Data/General_Components/Component_Header.tsx";
import Heraldry_Component from "../../../components/Components_Data/Specific_Components/Heraldry_Component.tsx";
import Component_Albums_I from "../../../components/Components_Data/General_Components/Component_Albums_I.tsx";
import Component_Songs from "../../../components/Components_Data/General_Components/Component_Songs.tsx";

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
    const songs = heraldry.talked_about_in_song;
    const albums = heraldry.talked_about_in_album;

    console.log(heraldry);

    return (
        <div>
            <Component_Header name={heraldry.name} image={heraldry.image} type="heraldry"/>
            <Heraldry_Component name={heraldry.name}/>
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