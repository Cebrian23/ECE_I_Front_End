import { Handlers, FreshContext, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { MithGQL } from "../../../types/legend/Mith.ts";
import Short_Album from "../../../components/Short_Album.tsx";
import Short_Song from "../../../components/Short_Song.tsx";
import { Class_Selector } from "../../../utilities/utils_CSS.ts";

type Data = {
    miths: MithGQL[],
}

export const handler: Handlers<Data> = {
    GET: async (req: Request, ctx: FreshContext<unknown, Data>) =>{
        const url = new URL(req.url);
        
        const name = url.searchParams.get("name")?.replace("%20", " ");

        if(!name){
            return ctx.render();
        }

        const data = await Axios.get<MithGQL[]>(`https://ece-i-back-end-ii.deno.dev/miths/name?name=${name}`);
        
        return ctx.render({miths: data.data});
    }
}

const Page = (props: PageProps<Data>) => {
    const miths = props.data.miths;

    console.log(miths);

    return(
        <div>
            {
                miths.map((mith) => {
                    const songs = mith.talked_about_in_song;
                    const albums = mith.talked_about_in_album;

                    return(
                        <div class="block">
                            <h1><a href={`/mith/id/${mith.id}`} class="a1">{mith.name}</a></h1>
                            {
                                songs !== undefined && songs.length !== 0 &&
                                <>
                                    <h3>Canciones que abordan este mito</h3>
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
                                    <h3>Albumes que abordan este mito</h3>
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