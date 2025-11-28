import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { AlbumGQL } from "../../types/music/Album.ts";
import Component_Header from "../../components/Components_Data/General_Components/Component_Header.tsx";
import Album_Component from "../../components/Components_Data/Specific_Components/Album_Component.tsx";

type Data = {
    album: AlbumGQL,
}

export const handler: Handlers<Data> = {
    GET: async (_req: Request, ctx: FreshContext<unknown, Data>) =>{
        const id = ctx.params.id;

        const data = await Axios.get<AlbumGQL>(`https://ece-i-back-end-ii.deno.dev/album/id?id=${id}`);

        return ctx.render({album: data.data});
    }
}

const Page = (props: PageProps<Data>) => {
    const album = props.data.album;

    console.log(album);

    return (
        <div>
            <Component_Header name={album.name} type="album" image={album.cover}/>
            <Album_Component name={album.name} year_of_publish={album.year_of_publish} band={album.creator}
                             songs={album.songs} conceptual_album={album.conceptual_album}
                             talk_about={album.talk_about}
            />
        </div>
    );
}

export default Page;