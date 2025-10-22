import { Handlers, FreshContext, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { FestivityGQL } from "../../../types/festivity/Festivity.ts";
import Short_Album from "../../../components/Short_Album.tsx";
import Short_Song from "../../../components/Short_Song.tsx";

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
                    return(
                        <div class="block">
                            <h1><a href={`/festivity/id/${festivity.id}`} class="a1">{festivity.name}</a></h1>
                            {
                                festivity.talked_about_in_song !== undefined && festivity.talked_about_in_song.length !== 0 &&
                                <>
                                    <h3>Canciones que abordan esta festividad</h3>
                                    <div>
                                        {
                                            festivity.talked_about_in_song.map((song) => {
                                                return(
                                                    <Short_Song song={song}/>
                                                );
                                            })
                                        }
                                    </div>
                                </>
                            }
                            {
                                festivity.talked_about_in_album !== undefined && festivity.talked_about_in_album.length !== 0 &&
                                <>
                                    <h3>Albumes que abordan esta festividad</h3>
                                    <div>
                                        {
                                            festivity.talked_about_in_album.map((album) => {
                                                return(
                                                    <Short_Album album={album}/>
                                                );
                                            })
                                        }
                                    </div>
                                </>
                            }
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Page;