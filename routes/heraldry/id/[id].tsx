import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { HeraldryGQL } from "../../../types/history/Heraldry.ts";
import Short_Album from "../../../components/Short_Album.tsx";
import Short_Song from "../../../components/Short_Song.tsx";
import { Class_Selector } from "../../../utilities/utils_CSS.ts";

type Data = {
    heraldry: HeraldryGQL,
}

export const handler: Handlers<Data> = {
    GET: async (_req: Request, ctx: FreshContext<unknown, Data>) =>{
        const id = ctx.params.id;

        const data = await Axios.get<HeraldryGQL>(`https://ece-i-back-end-ii.deno.dev/heraldry/id?id=${id}`);
        
        return ctx.render({heraldry: data.data});
    }
}

const Page = (props: PageProps<Data>) => {
    const heraldry = props.data.heraldry;
    const songs = heraldry.talked_about_in_song;
    const albums = heraldry.talked_about_in_album;

    console.log(heraldry);

    return (
        <div>
            <div class="card_head">
                <h1>Página de la heráldica "{heraldry.name}"</h1>
                <img src={heraldry.image} width={325} height={350}/>
            </div>
            <div class="card_body">
                <p><b>Nombre: </b>{heraldry.name}</p>
            </div>
            <div>
                {
                    songs !== undefined && songs.length !== 0  &&
                    <div>
                        <p style="text-indent: 25%;"><b>Canciones que abordan esta heráldica:</b></p>
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
                        <p style="text-indent: 25%;"><b>Albumes que abordan esta heráldica:</b></p>
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