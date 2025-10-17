import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { LegendGQL } from "../../../types/legend/Legend.ts";

type Data = {
    legends: LegendGQL[],
}

export const handler: Handlers<Data> = {
    GET: async (req: Request, ctx: FreshContext<unknown, Data>) =>{
        const url = new URL(req.url);
        
        const name = url.searchParams.get("name")?.replace("+", " ");

        if(!name){
            return ctx.render();
        }

        const data = await Axios.get<LegendGQL[]>(`https://ece-i-back-end-ii.deno.dev/legends/name?name=${name}`);
        
        return ctx.render({legends: data.data});
    }
}

const Page = (props: PageProps<Data>) => {
    const legends = props.data.legends;

    return(
        <div>
            {
                legends.map((legend) => {
                    return(
                        <div>
                            <div>
                                <h1>{legend.name}</h1>
                            </div>
                            <div>
                                {
                                    legend.talked_about_in_song.length !== 0 &&
                                    <>
                                        <h3>Canciones que abordan esta leyenda</h3>
                                        <div>
                                            {
                                                legend.talked_about_in_song.map((song) => {
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
                                    legend.talked_about_in_song.length !== 0 &&
                                    <>
                                        <h3>Albumes que abordan esta leyenda</h3>
                                        <div>
                                            {
                                                legend.talked_about_in_album.map((album) => {
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