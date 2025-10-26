import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { HeraldryGQL } from "../../../types/history/Heraldry.ts";
import Short_Album from "../../../components/Short_Album.tsx";
import Short_Song from "../../../components/Short_Song.tsx";

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
            <div>
                <p><b>Nombre: </b>{heraldry.name}</p>
                {
                    songs !== undefined && songs.length !== 0  &&
                    <>
                        <p><b>Canciones que abordan esta heráldica:</b></p>
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
                        <p><b>Albumes que abordan esta heráldica:</b></p>
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