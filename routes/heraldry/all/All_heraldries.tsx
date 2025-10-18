import { Handlers, FreshContext, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { HeraldryGQL } from "../../../types/history/Heraldry.ts";
import Short_Album from "../../../components/Short_Album.tsx";
import Short_Song from "../../../components/Short_Song.tsx";

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
                    return(
                        <div class="block">
                            <h1><a href={`/heraldry/id/${heraldry.id}`} class="a1">{heraldry.name}</a></h1>
                            {
                                heraldry.talked_about_in_song !== undefined && heraldry.talked_about_in_song.length !== 0 &&
                                <>
                                    <h3>Canciones que abordan esta heráldica</h3>
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
                                heraldry.talked_about_in_album !== undefined && heraldry.talked_about_in_album.length !== 0 &&
                                <>
                                    <h3>Albumes que abordan esta heráldica</h3>
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
                    );
                })
            }
        </div>
    );
}

export default Page;