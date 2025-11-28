import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { SongGQL } from "../../types/music/Song.ts";
import Component_Header from "../../components/Components_Data/General_Components/Component_Header.tsx";
import Song_Component from "../../components/Components_Data/Specific_Components/Song_Component.tsx";
import Videos_Components from "../../components/Components_Data/Specific_Components/Videos_Components.tsx";

type Data = {
    song: SongGQL,
}

export const handler: Handlers<Data> = {
    GET: async (_req: Request, ctx: FreshContext<unknown, Data>) =>{
        const id = ctx.params.id;

        const data = await Axios.get<SongGQL>(`https://ece-i-back-end-ii.deno.dev/song/id?id=${id}`);

        return ctx.render({song: data.data});
    }
}

const Page = (props: PageProps<Data>) => {
    const song = props.data.song;

    console.log(song);

    return (
        <div>
            <Component_Header name={song.name} image={song.cover} type="song"/>
            <Song_Component name={song.name} album_in={song.album_in}
                            talk_about={song.talk_about}
            />
            <Videos_Components official_video={song.official_video}
                               official_lyric_video={song.official_lyric_video}
                               official_cd_video={song.official_cd_video}
            />
        </div>
    );
}

export default Page;