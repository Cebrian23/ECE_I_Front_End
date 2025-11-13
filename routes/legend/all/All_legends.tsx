import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { LegendGQL } from "../../../types/legend/Legend.ts";
import Short_Album from "../../../components/Short_Album.tsx";
import Short_Song from "../../../components/Short_Song.tsx";
import { Class_Selector } from "../../../utilities/utils_CSS.ts";

type Data = {
    legends: LegendGQL[],
}

export const handler: Handlers<Data> = {
    GET: async (_req: Request, ctx: FreshContext<unknown, Data>) =>{
        const data = await Axios.get<LegendGQL[]>("https://ece-i-back-end-ii.deno.dev/legends");
        
        return ctx.render({legends: data.data});
    }
}

const Page = (props: PageProps<Data>) => {
    const legends = props.data.legends;

    console.log(legends);

    return(
        <div>
            {
                legends.map((legend) => {
                    const songs = legend.talked_about_in_song;
                    const albums = legend.talked_about_in_album;

                    return(
                        <div class="block">
                            <h1><a href={`/legend/id/${legend.id}`} class="a1">{legend.name}</a></h1>
                            {
                                songs !== undefined && songs.length !== 0 &&
                                <>
                                    <h3>Canciones que abordan esta leyenda</h3>
                                    <div class={Class_Selector(songs)}>
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
                                albums !== undefined && albums.length !== 0 &&
                                <>
                                    <h3>Albumes que abordan esta leyenda</h3>
                                    <div class={Class_Selector(albums)}>
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
                            <hr width={500}/>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Page;