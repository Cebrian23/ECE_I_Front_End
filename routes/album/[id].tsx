import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { AlbumDB } from "../../types/music/Album.ts";

type Data = {
    album?: AlbumDB,
}

const Album_id = `#graphql
    query Query ($id: String!) {
        getAlbum_id (id: $id) {
            id
            name
            cover
            year_of_publish
            creator
            songs{
                id
                name
            }
            talk_about{}
            conceptual_album
        }
    }
`

const Album_name = `#graphql
    query Query ($name: String!) {
        getAlbum_name (name: $name) {
            id
            name
            cover
            year_of_publish
            creator
            songs{
                id
                name
            }
            talk_about{}
            conceptual_album
        }
    }
`

export const handler: Handlers<Data> = {
    GET: async (req: Request, ctx: FreshContext<unknown, Data>) =>{
        const id = ctx.params.id;

        //
        
        return ctx.render({});
    }
}

const Page = (props: PageProps<Data>) => {
    const album = props.data.album;

    return (
        <div>
            {
                album !== undefined &&
                <div>
                    <h1>Página de {album.name}</h1>
                    <img src={album.cover}/>
                    <p><b>Nombre: </b> {album.name}</p>
                    <p><b>Año de publicación: </b>{album.year_of_publish}</p>
                    <p><b>Lista de canciones:</b></p>
                    <ul>
                        {
                            album.songs.map((song) => {
                                <li><a href={`/song/${song.id}`}></a>{}</li>
                            })
                        }
                    </ul>
                </div>
            }
        </div>
    );
}

export default Page;