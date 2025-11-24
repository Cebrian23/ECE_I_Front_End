import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { FestivityGQL } from "../../../types/festivity/Festivity.ts";
import Short_Album from "../../../components/Short_Album.tsx";
import Short_Song from "../../../components/Short_Song.tsx";
import { Class_Selector } from "../../../utilities/utils_CSS.ts";

type Data = {
    festivity: FestivityGQL,
}

export const handler: Handlers<Data> = {
    GET: async (_req: Request, ctx: FreshContext<unknown, Data>) =>{
        const id = ctx.params.id;

        const data = await Axios.get<FestivityGQL>(`https://ece-i-back-end-ii.deno.dev/festivity/id?id=${id}`);
        
        return ctx.render({festivity: data.data});
    }
}

const Page = (props: PageProps<Data>) => {
    const festivity = props.data.festivity;
    const songs = festivity.talked_about_in_song;
    const albums = festivity.talked_about_in_album;
    
    console.log(festivity);

    return(
        <div>
            <div class="card_head">
                <h1>Página de la festividad "{festivity.name}"</h1>
            </div>
            <div class="card_body">
                <p><b>Nombre: </b>{festivity.name}</p>
                <p><b>Fecha: </b>{festivity.date.day + " de " + festivity.date.month}</p>
            </div>
            <div>
                {
                    songs !== undefined && songs.length !== 0  &&
                    <div>
                        <p style="text-indent: 25%;"><b>Canciones que abordan esta festividad:</b></p>
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
                        <p style="text-indent: 25%;"><b>Albumes que abordan esta festividad:</b></p>
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