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

    console.log(heraldry);

    return (
        <div>
            <div class="card_head">
                <h1>Página de la heráldica "{heraldry.name}"</h1>
                <img src={heraldry.image}/>
            </div>
            <div>
                <p><b>Nombre: </b>{heraldry.name}</p>
                {
                    heraldry.talked_about_in_song !== undefined && heraldry.talked_about_in_song.length !==0  &&
                    <>
                        <p>Canciones que abordan esta heráldica:</p>
                        <div>
                            {
                                heraldry.talked_about_in_song.map((song) => {
                                    return(
                                        <Short_Song song={song}/>
                                    );
                                })
                            }
                        </div>
                    </>
                }
                {
                    heraldry.talked_about_in_album !== undefined && heraldry.talked_about_in_album.length !==0  &&
                    <>
                        <p>Albumes que abordan esta heráldica:</p>
                        <div>
                            {
                                heraldry.talked_about_in_album.map((album) => {
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