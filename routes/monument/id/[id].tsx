import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { MonumentGQL } from "../../../types/history/Monument.ts";
import Short_Album from "../../../components/Short_Album.tsx";
import Short_Song from "../../../components/Short_Song.tsx";

type Data = {
    monument: MonumentGQL,
}

export const handler: Handlers<Data> = {
    GET: async (_req: Request, ctx: FreshContext<unknown, Data>) =>{
        const id = ctx.params.id;

        const data = await Axios.get<MonumentGQL>(`https://ece-i-back-end-ii.deno.dev/monument/id?id=${id}`);
        
        return ctx.render({monument: data.data});
    }
}

const Page = (props: PageProps<Data>) => {
    const monument = props.data.monument;
    const songs = monument.talked_about_in_song;
    const albums = monument.talked_about_in_album;
    
    console.log(monument);

    return (
        <div>
            <div class="card_head">
                <h1>Página del monumento "{monument.name}"</h1>
            </div>
            <div>
                <p><b>Nombre: </b>{monument.name}</p>
                <p>
                    <b>¿Sigue existiendo? </b>
                    {
                        monument.still_exists === true &&
                        <>Si</>
                    }
                    {
                        monument.still_exists === false &&
                        <>No</>
                    }
                </p>
                {
                    monument.country_in !== null &&
                    <p><b>Localizado en: </b>{monument.country_in}</p>
                }
                {
                    songs !== undefined && songs.length !== 0  &&
                    <>
                        <p><b>Canciones que abordan este monumento:</b></p>
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
                        <p><b>Albumes que abordan este monumento:</b></p>
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