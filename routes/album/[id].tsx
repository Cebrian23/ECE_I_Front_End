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
                <img src={album.cover} width={300} height={350}/>
            </div>
            <div>
                <p><b>Nombre del album: </b>{album.name}</p>
                <p><b>Año de publicación: </b>{album.year_of_publish}</p>
                <p><b>Banda autora: </b><a  href={`/band/${album.creator.id}`} class="a1">{album.creator.name}</a></p>
                {
                    album.songs !== undefined && album.songs.length > 0 &&
                    <>
                        <p><b>Canciones destacadas:</b></p>
                        <ul>
                            {
                                album.songs.map((song) => {
                                    return(
                                        <li><a href={`/song/${song.id}`} class="a1">{song.name}</a></li>
                                    );
                                })
                            }
                        </ul>
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
                    (album.talk_about !== null && album.talk_about !== undefined) &&
                    (
                        album.talk_about.books.length > 0 || album.talk_about.events.length > 0 ||
                        album.talk_about.festivities.length > 0 || album.talk_about.heraldries.length > 0 ||
                        album.talk_about.legends.length > 0 || album.talk_about.miths.length > 0 ||
                        album.talk_about.monuments.length > 0 || album.talk_about.organizations.length > 0 ||
                        album.talk_about.people.length > 0
                    ) &&
                    <>
                        <p><b>Temas que aborda:</b></p>
                        <li>
                            {
                                album.talk_about.books.map((book) => {
                                    return(
                                        <ul><a href={`/book/id/${book.id}`} class="a1">{book.title}</a></ul>
                                    );
                                })
                            }
                            {
                                album.talk_about.events.map((event) => {
                                    return(
                                        <ul><a href={`/event/id/${event.id}`} class="a1">{event.name}</a></ul>
                                    );
                                })
                            }
                            {
                                album.talk_about.festivities.map((festivity) => {
                                    return(
                                        <ul><a href={`/festivity/id/${festivity.id}`} class="a1">{festivity.name}</a></ul>
                                    );
                                })
                            }
                            {
                                album.talk_about.heraldries.map((heraldry) => {
                                    return(
                                        <ul><a href={`/heraldry/id/${heraldry.id}`} class="a1">{heraldry.name}</a></ul>
                                    );
                                })
                            }
                            {
                                album.talk_about.legends.map((legend) => {
                                    return(
                                        <ul><a href={`/legend/id/${legend.id}`} class="a1">{legend.name}</a></ul>
                                    );
                                })
                            }
                            {
                                album.talk_about.miths.map((mith) => {
                                    return(
                                        <ul><a href={`/mith/id/${mith.id}`} class="a1">{mith.name}</a></ul>
                                    );  
                                })
                            }
                            {
                                album.talk_about.monuments.map((monument) => {
                                    return(
                                        <ul><a href={`/monument/id/${monument.id}`} class="a1">{monument.name}</a></ul>
                                    );
                                })
                            }
                            {
                                album.talk_about.organizations.map((organization) => {
                                    return(
                                        <ul><a href={`/organization/id/${organization.id}`} class="a1">{organization.name}</a></ul>
                                    );
                                })
                            }
                            {
                                album.talk_about.people.map((person) => {
                                    return(
                                        <ul>
                                            <a href={`/person/id/${person.id}`} class="a1">
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
                                        </ul>
                                    );
                                })
                            }
                        </li>
                    </>
                }
            </div>
        </div>
    );
}

export default Page;