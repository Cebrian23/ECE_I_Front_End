import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { LegendGQL } from "../../../types/legend/Legend.ts";
import Short_Album from "../../../components/Short_Album.tsx";
import Short_Song from "../../../components/Short_Song.tsx";

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
            <div class="card_head">
                <h1>Página de la leyenda "{legend.name}"</h1>
            </div>
            <div>
                <p><b>Nombre: </b>{legend.name}</p>
                {
                    songs !== undefined && songs.length !== 0  &&
                    <>
                        <p><b></b>Canciones que abordan esta leyenda:</p>
                        <div class={songs.length === 1 ? "group1" : (songs.length === 2 ? "group2" : "group")}>
                            {
                                songs.map((song) => {
                                    return(
                                        <Short_Song song={song}/>
                                    );
                                })
                            }
                        </div>
                    </>
                }
                {
                    albums !== undefined && albums.length !== 0  &&
                    <>
                        <p><b></b>Albumes que abordan esta leyenda:</p>
                        <div class={albums.length === 1 ? "group1" : (albums.length === 2 ? "group2" : "group")}>
                            {
                                albums.map((album) => {
                                    return(
                                        <Short_Album album={album}/>
                                    );
                                })
                            }
                        </div>
                    </>
                }
            </div>
        </div>
    );
}

export default Page;