import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { MonumentGQL } from "../../../types/history/Monument.ts";
import Short_Album from "../../../components/Short_Album.tsx";
import Short_Song from "../../../components/Short_Song.tsx";
import { Class_Selector } from "../../../utilities/utils_CSS.ts";

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
            <div class="card_body">
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
            </div>
            <div>
                {
                    songs !== undefined && songs.length !== 0  &&
                    <div>
                        <p style="text-indent: 25%;"><b>Canciones que hablan este monumento:</b></p>
                        <div class={Class_Selector(songs, true)}>
                            {
                                songs.map((song) => {
                                    return(
                                        <Short_Song song={song}/>
                                    );
                                })
                            }
                        </div>
                    </div>
                }
                {
                    albums !== undefined && albums.length !== 0  &&
                    <div>
                        <p style="text-indent: 25%;"><b>Albumes que hablan este monumento:</b></p>
                        <div class={Class_Selector(albums, true)}>
                            {
                                albums.map((album) => {
                                    return(
                                        <Short_Album album={album}/>
                                    );
                                })
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default Page;