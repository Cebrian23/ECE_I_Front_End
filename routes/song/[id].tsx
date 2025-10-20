import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { SongGQL } from "../../types/music/Song.ts";

type Data = {
    song: SongGQL,
}

export const handler: Handlers<Data> = {
    GET: async (_req: Request, ctx: FreshContext<unknown, Data>) =>{
        const id = ctx.params.id;

        const data = await Axios.get<SongGQL>(`https://ece-i-back-end-ii.deno.dev/song/id?id=${id}`);
        
        return ctx.render({song: data.data});
    }
}

const Page = (props: PageProps<Data>) => {
    const song = props.data.song;

    console.log(song);

    return (
        <div>
            <div class="card_head">
                <h1>Página de la canción "{song.name}"</h1>
                <img src={song.cover}/>
            </div>
            <div>
                <p><b>Nombre: </b>{song.name}</p>
                <p>
                    <b>Album al que pertence: </b>
                    <a href={`/album/${song.album_in.id}`}>
                        <i>{song.album_in.name + " (" + song.album_in.year_of_publish + ") "}</i>
                        <a href={song.album_in.creator.id}>{song.album_in.creator.name}</a>
                    </a>
                </p>
                {
                    song.talk_about !== undefined &&
                    <>
                        <p>Temas que aborda:</p>
                        <ul>
                            {
                                song.talk_about.books.map((book) => {
                                    <li><a href={`/book/id/${book.id}`}>{book.title}</a></li>
                                })
                            }
                            {
                                song.talk_about.events.map((event) => {
                                    <li><a href={`/event/id/${event.id}`}>{event.name}</a></li>
                                })
                            }
                            {
                                song.talk_about.festivities.map((festivity) => {
                                    <li><a href={`/festivity/id/${festivity.id}`}>{festivity.name}</a></li>
                                })
                            }
                            {
                                song.talk_about.heraldries.map((heraldry) => {
                                    <li><a href={`/heraldry/id/${heraldry.id}`}>{heraldry.name}</a></li>
                                })
                            }
                            {
                                song.talk_about.legends.map((legend) => {
                                    <li><a href={`/legend/id/${legend.id}`}>{legend.name}</a></li>
                                })
                            }
                            {
                                song.talk_about.miths.map((mith) => {
                                    <li><a href={`/mith/id/${mith.id}`}>{mith.name}</a></li>
                                })
                            }
                            {
                                song.talk_about.monuments.map((monument) => {
                                    <li><a href={`//id/${monument.id}`}>{monument.name}</a></li>
                                })
                            }
                            {
                                song.talk_about.organizations.map((organization) => {
                                    <li><a href={`//id/${organization.id}`}>{organization.name}</a></li>
                                })
                            }
                            {
                                song.talk_about.people.map((person) => {
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