import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { LegendGQL } from "../../../types/legend/Legend.ts";
import Short_Album from "../../../components/Short_Album.tsx";
import Short_Song from "../../../components/Short_Song.tsx";

type Data = {
    legends: LegendGQL[],
}

export const handler: Handlers<Data> = {
    GET: async (req: Request, ctx: FreshContext<unknown, Data>) =>{
        const url = new URL(req.url);
        
        const name = url.searchParams.get("name")?.replace("%20", " ");

        if(!name){
            return ctx.render();
        }

        const data = await Axios.get<LegendGQL[]>(`https://ece-i-back-end-ii.deno.dev/legends/name?name=${name}`);
        
        return ctx.render({legends: data.data});
    }
}

const Page = (props: PageProps<Data>) => {
    const legends = props.data.legends;

    console.log(legends);

    return(
        <div>
            {
                legends.map((legend) => {
                    return(
                        <div class="block">
                            <h1><a href={`/legend/id/${legend.id}`} class="a1">{legend.name}</a></h1>
                            {
                                legend.talked_about_in_song !== undefined && legend.talked_about_in_song.length !== 0 &&
                                <>
                                    <h3>Canciones que abordan esta leyenda</h3>
                                    <div class="block_content">
                                        {
                                            legend.talked_about_in_song.map((song) => {
                                                return(
                                                    <Short_Song song={song}/>
                                                );
                                            })
                                        }
                                    </div>
                                </>
                            }
                            {
                                legend.talked_about_in_album !== undefined && legend.talked_about_in_album.length !== 0 &&
                                <>
                                    <h3>Albumes que abordan esta leyenda</h3>
                                    <div class="block_content">
                                        {
                                            legend.talked_about_in_album.map((album) => {
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