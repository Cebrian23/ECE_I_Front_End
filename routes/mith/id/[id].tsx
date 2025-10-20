import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { MithGQL } from "../../../types/legend/Mith.ts";
import Short_Album from "../../../components/Short_Album.tsx";
import Short_Song from "../../../components/Short_Song.tsx";

type Data = {
    mith: MithGQL,
}

export const handler: Handlers<Data> = {
    GET: async (_req: Request, ctx: FreshContext<unknown, Data>) =>{
        const id = ctx.params.id;

        const data = await Axios.get<MithGQL>(`https://ece-i-back-end-ii.deno.dev/mith/id?id=${id}`);
        
        return ctx.render({mith: data.data});
    }
}

const Page = (props: PageProps<Data>) => {
    const mith = props.data.mith;

    console.log(mith);

    return (
        <div>
            <div class="card_head">
                <h1>Página del mito "{mith.name}"</h1>
            </div>
            <div>
                <p><b>Nombre: </b>{mith.name}</p>
                {
                    mith.talked_about_in_song !== undefined && mith.talked_about_in_song.length !== 0  &&
                    <>
                        <p>Canciones que abordan este mito:</p>
                        <div>
                            {
                                mith.talked_about_in_song.map((song) => {
                                    return(
                                        <Short_Song song={song}/>
                                    );
                                })
                            }
                        </div>
                    </>
                }
                {
                    mith.talked_about_in_album !== undefined && mith.talked_about_in_album.length !== 0  &&
                    <>
                        <p>Albumes que abordan este mito:</p>
                        <div>
                            {
                                mith.talked_about_in_album.map((album) => {
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