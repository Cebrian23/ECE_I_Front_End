import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { SongDB } from "../../types/music/Song.ts";

type Data = {
    song?: SongDB,
}

const handler: Handlers<Data> = {
    GET: async (req: Request, ctx: FreshContext<unknown, Data>) =>{
        const id = ctx.params.id;

        //
        
        return ctx.render({});
    }
}

const Page = (props: PageProps<Data>) => {
    const song = props.data.song;

    return (
        <div>
            {
                song !== undefined &&
                <div>
                    <div>
                        <h1>Página de {song.name}</h1>
                    </div>
                    <div>
                        <p><b>Nombre: </b>{song.name}</p>
                        {
                            song.official_video !== undefined &&
                            <p><b>Vídeo oficial de la canción</b><a href={song.official_video}>Enlace</a></p>
                        }
                        <p>
                            <b>Temas que aborda:</b>
                            {
                                song.talk_about.map((topic) => {
                                    <div></div>
                                })
                            }
                        </p>
                    </div>
                </div>
            }
        </div>
    );
}

export default Page;