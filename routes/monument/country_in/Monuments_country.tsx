import { Handlers, FreshContext, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { MonumentGQL } from "../../../types/history/Monument.ts";
import Short_Album from "../../../components/Short_Album.tsx";
import Short_Song from "../../../components/Short_Song.tsx";

type Data = {
    monuments: MonumentGQL[],
}

export const handler: Handlers<Data> = {
    GET: async (req: Request, ctx: FreshContext<unknown, Data>) =>{
        const url = new URL(req.url);
        
        const country_in = url.searchParams.get("country_in")?.replace("+", " ");

        if(!country_in){
            return ctx.render();
        }

        const data = await Axios.get<MonumentGQL[]>(`https://ece-i-back-end-ii.deno.dev/monuments/country_in?country_in=${name}`);
        
        return ctx.render({monuments: data.data});
    }
}

const Page = (props: PageProps<Data>) => {
    const monuments = props.data.monuments;

    console.log(monuments);

    return(
        <div>
            {
                monuments.map((monument) => {
                    return(
                        <div class="block">
                            <h1><a href={`/monument/id/${monument.id}`} class="a1">{monument.name}</a></h1>
                            {
                                monument.talked_about_in_song !== undefined && monument.talked_about_in_song.length !== 0 &&
                                <>
                                    <h3>Canciones que abordan este monumento</h3>
                                    <div>
                                        {
                                            monument.talked_about_in_song.map((song) => {
                                                return(
                                                    <Short_Song song={song}/>
                                                );
                                            })
                                        }
                                    </div>
                                </>
                            }
                            {
                                monument.talked_about_in_album !== undefined && monument.talked_about_in_album.length !== 0 &&
                                <>
                                    <h3>Albumes que abordan este monumento</h3>
                                    <div>
                                        {
                                            monument.talked_about_in_album.map((album) => {
                                                return(
                                                    <Short_Album album={album}/>
                                                );
                                            })
                                        }
                                    </div>
                                </>
                            }
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Page;