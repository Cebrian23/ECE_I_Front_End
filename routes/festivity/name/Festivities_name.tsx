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
        
        const name = url.searchParams.get("name")?.replace("%20", " ");

        if(!name){
            return ctx.render();
        }

        const data = await Axios.get<FestivityGQL[]>(`https://ece-i-back-end-ii.deno.dev/festivities/name?name=${name}`);
        
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
                                albums !== undefined && albums.length !== 0 &&
                                <>
                                    <h3>Albumes que abordan esta festividad</h3>
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
                            <hr width={500}/>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Page;