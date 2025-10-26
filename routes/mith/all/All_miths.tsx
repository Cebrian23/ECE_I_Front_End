import { Handlers, FreshContext, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { MithGQL } from "../../../types/legend/Mith.ts";
import Short_Album from "../../../components/Short_Album.tsx";
import Short_Song from "../../../components/Short_Song.tsx";

type Data = {
    miths: MithGQL[],
}

export const handler: Handlers<Data> = {
    GET: async (_req: Request, ctx: FreshContext<unknown, Data>) =>{
        const data = await Axios.get<MithGQL[]>("https://ece-i-back-end-ii.deno.dev/miths");
        
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
                                    <h3>Albumes que abordan este mito</h3>
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