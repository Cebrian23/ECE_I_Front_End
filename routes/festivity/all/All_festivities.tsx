import { Handlers, FreshContext, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { FestivityGQL } from "../../../types/festivity/Festivity.ts";

type Data = {
    festivities: FestivityGQL[],
}

export const handler: Handlers<Data> = {
    GET: async (_req: Request, ctx: FreshContext<unknown, Data>) =>{
        const data = await Axios.get<FestivityGQL[]>("https://ece-i-back-end-ii.deno.dev/festivities");
        
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
                    return(
                        <div>
                            <div>
                                <h1>{festivity.name}</h1>
                            </div>
                            <div>
                                {
                                    festivity.talked_about_in_song !== undefined && festivity.talked_about_in_song.length !== 0 &&
                                    <>
                                        <h3>Canciones que abordan esta leyenda</h3>
                                        <div>
                                            {
                                                festivity.talked_about_in_song.map((song) => {
                                                    return(
                                                        <div>
                                                            <image src={song.cover}/>
                                                            <p><a href={song.id}>{song.name}</a></p>
                                                            <i><a href={song.album_in.id}>{song.album_in.name + " (" + song.album_in.year_of_publish + ")"}</a></i>
                                                        </div>
                                                    );
                                                })
                                            }
                                        </div>
                                    </>
                                }
                            </div>
                            <div>
                                {
                                    festivity.talked_about_in_album !== undefined && festivity.talked_about_in_album.length !== 0 &&
                                    <>
                                        <h3>Albumes que abordan esta leyenda</h3>
                                        <div>
                                            {
                                                festivity.talked_about_in_album.map((album) => {
                                                    return(
                                                        <div>
                                                            <image src={album.cover}/>
                                                            <i><a href={album.id}>{album.name + " (" + album.year_of_publish + ")"}</a></i>
                                                        </div>
                                                    );
                                                })
                                            }
                                        </div>
                                    </>
                                }
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Page;