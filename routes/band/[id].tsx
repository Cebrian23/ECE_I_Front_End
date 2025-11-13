import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { BandGQL } from "../../types/music/Band.ts";
import Shorter_Album from "../../components/Shorter_Album.tsx";
import { Class_Selector } from "../../utilities/utils_CSS.ts";

type Data = {
    band: BandGQL,
}

export const handler: Handlers<Data> = {
    GET: async (_req: Request, ctx: FreshContext<unknown, Data>) =>{
        const id = ctx.params.id;

        const data = await Axios.get<BandGQL>(`https://ece-i-back-end-ii.deno.dev/band/id?id=${id}`);
        
        return ctx.render({band: data.data});
    }
}

const Page = (props: PageProps<Data>) => {
    const band = props.data.band;
    const albums = band.albums;

    console.log(band);

    return (
        <div>
            <div class="card_head">
                <h1>Página de la banda "{band.name}"</h1>
                <img class={band.logo}/>
            </div>
            <div>
                <div class="card_body">
                    <p><b>Nombre: </b>{band.name}</p>
                    <p><b>Albumes de la banda:</b></p>
                </div>
                <div class={Class_Selector(albums)}>
                    {
                        albums.map((album) => {
                            return(
                                <Shorter_Album album={album}/>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Page;