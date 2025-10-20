import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { AlbumGQL } from "../../types/music/Album.ts";

type Data = {
    album: AlbumGQL,
}

export const handler: Handlers<Data> = {
    GET: async (_req: Request, ctx: FreshContext<unknown, Data>) =>{
        const id = ctx.params.id;

        const data = await Axios.get<AlbumGQL>(`https://ece-i-back-end-ii.deno.dev/album/id?id=${id}`);
        
        return ctx.render({album: data.data});
    }
}

const Page = (props: PageProps<Data>) => {
    const album = props.data.album;

    console.log(album);

    return (
        <div>
            <div class="card_head">
                <h1>Página del album "{album.name}"</h1>
                <img src={album.cover}/>
            </div>
            <div>
                <p><b>Nombre del album: </b>{album.name}</p>
                <p><b>Año de publicación: </b>{album.year_of_publish}</p>
                <p><b>Banda autora: </b><a  href={`/band/${album.creator.id}`}>{album.creator.name}</a></p>
                {
                    album.songs !== undefined && album.songs.length === 0 &&
                    <>
                        <p>Canciones destacadas:</p>
                        <li>
                            {
                                album.songs.map((song) => {
                                    return(
                                        <ul><a href={`/song/id/${song.id}`}>{song.name}</a></ul>
                                    );
                                })
                            }
                        </li>
                    </>
                }
                <p>
                    <b>¿Es un album conceptual? </b>
                    {
                        album.conceptual_album === true &&
                        <>Si</>
                    }
                    {
                        album.conceptual_album === false &&
                        <>No</>
                    }
                </p>
                {
                    album.talk_about !== undefined &&
                    <>
                        <p>Temas que aborda:</p>
                        <ul>
                            {
                                album.talk_about.books.map((book) => {
                                    <li><a href={`/book/id/${book.id}`}>{book.title}</a></li>
                                })
                            }
                            {
                                album.talk_about.events.map((event) => {
                                    <li><a href={`/event/id/${event.id}`}>{event.name}</a></li>
                                })
                            }
                            {
                                album.talk_about.festivities.map((festivity) => {
                                    <li><a href={`/festivity/id/${festivity.id}`}>{festivity.name}</a></li>
                                })
                            }
                            {
                                album.talk_about.heraldries.map((heraldry) => {
                                    <li><a href={`/heraldry/id/${heraldry.id}`}>{heraldry.name}</a></li>
                                })
                            }
                            {
                                album.talk_about.legends.map((legend) => {
                                    <li><a href={`/legend/id/${legend.id}`}>{legend.name}</a></li>
                                })
                            }
                            {
                                album.talk_about.miths.map((mith) => {
                                    <li><a href={`/mith/id/${mith.id}`}>{mith.name}</a></li>
                                })
                            }
                            {
                                album.talk_about.monuments.map((monument) => {
                                    <li><a href={`//id/${monument.id}`}>{monument.name}</a></li>
                                })
                            }
                            {
                                album.talk_about.organizations.map((organization) => {
                                    <li><a href={`//id/${organization.id}`}>{organization.name}</a></li>
                                })
                            }
                            {
                                album.talk_about.people.map((person) => {
                                    <li>
                                        <a href={`//id/${person.id}`}>
                                            {
                                                person.contry_from !== "China" &&
                                                <>
                                                    {
                                                        person.surname !== null &&
                                                        <>{person.name + " " + person.surname}</>
                                                    }
                                                    {
                                                        person.surname === null &&
                                                        <>{person.name}</>
                                                    }
                                                </>
                                            }
                                            {
                                                person.contry_from === "China" &&
                                                <>{person.surname + " " + person.name}</>
                                            }
                                        </a>
                                    </li>
                                })
                            }
                        </ul>
                    </>
                }
            </div>
        </div>
    );
}

export default Page;