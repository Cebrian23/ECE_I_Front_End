import { Handlers, FreshContext, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { HeraldryGQL } from "../../../types/history/Heraldry.ts";
import Short_Album from "../../../components/Short_Album.tsx";
import Short_Song from "../../../components/Short_Song.tsx";
import { Class_Selector } from "../../../utilities/utils_CSS.ts";

type Data = {
    heraldries: HeraldryGQL[],
}

export const handler: Handlers<Data> = {
    GET: async (_req: Request, ctx: FreshContext<unknown, Data>) =>{
        const data = await Axios.get<HeraldryGQL[]>("https://ece-i-back-end-ii.deno.dev/heraldries");
        
        return ctx.render({heraldries: data.data});
    }
}

const Page = (props: PageProps<Data>) => {
    const heraldries = props.data.heraldries;

    console.log(heraldries);

    return(
        <div>
            {
                heraldries.map((heraldry) => {
                    const songs = heraldry.talked_about_in_song;
                    const albums = heraldry.talked_about_in_album;

                    return(
                        <div class="block">
                            <h1><a href={`/heraldry/id/${heraldry.id}`} class="a1">{heraldry.name}</a></h1>
                            {
                                songs !== undefined && songs.length !== 0 &&
                                <>
                                    <h3>Canciones que abordan esta heráldica</h3>
                                    <div class={Class_Selector(songs)}>
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
                                albums !== undefined && albums.length !== 0 &&
                                <>
                                    <h3>Albumes que abordan esta heráldica</h3>
                                    <div class={Class_Selector(albums)}>
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
                            {
                                heraldries.length > 0 &&
                                <hr width={500}/>
                            }
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Page;