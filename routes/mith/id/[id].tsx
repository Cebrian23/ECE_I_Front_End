import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { MithGQL } from "../../../types/legend/Mith.ts";
import Component_Header from "../../../components/Components_Data/General_Components/Component_Header.tsx";
import Component_Songs from "../../../components/Components_Data/General_Components/Component_Songs.tsx";
import Component_Albums_I from "../../../components/Components_Data/General_Components/Component_Albums_I.tsx";
import Mith_Component from "../../../components/Components_Data/Specific_Components/Mith_Component.tsx";

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
    const songs = mith.talked_about_in_song;
    const albums = mith.talked_about_in_album;

    console.log(mith);

    return (
        <div>
            <Component_Header name={mith.name} type="mith"/>
            <Mith_Component name={mith.name}/>
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