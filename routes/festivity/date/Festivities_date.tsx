import { Handlers, FreshContext, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { FestivityGQL } from "../../../types/festivity/Festivity.ts";
import Short_Album from "../../../components/Short_Album.tsx";
import Short_Song from "../../../components/Short_Song.tsx";
import { Class_Selector } from "../../../utilities/utils_CSS.ts";

type Data = {
    festivities: FestivityGQL[],
}

export const handler: Handlers<Data> = {
    GET: async (req: Request, ctx: FreshContext<unknown, Data>) =>{
        const url = new URL(req.url);
        
        const month = url.searchParams.get("month")?.replace("%20", " ");
        const day = url.searchParams.get("day")?.replace("%20", " ");

        if(!month && !day){
            return ctx.render();
        }
        
        const data = await Axios.get<FestivityGQL[]>(`https://ece-i-back-end-ii.deno.dev/festivities/date?month=${month}&day=${day}`);
        
        return ctx.render({festivities: data.data});
    }
}

const Page = (props: PageProps<Data>) => {
    const festivities = props.data.festivities;

    console.log(festivities);

    return(
        <div>
            {
                festivities.map((festivity) => {
                    const songs = festivity.talked_about_in_song;
                    const albums = festivity.talked_about_in_album;

                    return(
                        <div class="block">
                            <h1><a href={`/festivity/id/${festivity.id}`} class="a1">{festivity.name}</a></h1>
                            {
                                songs !== undefined && songs.length !== 0 &&
                                <>
                                    <h3>Canciones que abordan esta festividad</h3>
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
                                    <h3>Albumes que abordan esta festividad</h3>
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