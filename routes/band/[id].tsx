import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { BandDB } from "../../types/music/Band.ts";

type Data = {
    band?: BandDB,
}

export const handler: Handlers<Data> = {
    GET: async (req: Request, ctx: FreshContext<unknown, Data>) =>{
        const id = ctx.params.id;

        //
        
        return ctx.render({});
    }
}

const Page = (props: PageProps<Data>) => {
    const band = props.data.band;

    return (
        <div>
            {
                band !== undefined &&
                <div>
                    <div>
                        <h1>Página de {band.name}</h1>
                        <img src={band.logo}/>
                    </div>
                    <div>
                        <p><b>Nombre: </b>{band.name}</p>
                        <div>
                            <b>Albums: </b>
                            {
                                band.albums.map((album) => {
                                    <div></div>
                                })
                            }
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default Page;