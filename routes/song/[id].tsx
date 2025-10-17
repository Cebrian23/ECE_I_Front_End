import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { SongGQL } from "../../types/music/Song.ts";

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
            <h1>Página de la canción "{song.name}"</h1>
        </div>
    );
}

export default Page;