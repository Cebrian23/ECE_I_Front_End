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
                <img src={song.cover} width={300} height={350}/>
            </div>
            <div class="card_body">
                <p><b>Nombre: </b>{song.name}</p>
                <p>
                    <b>Album al que pertence: </b>
                    <a href={`/album/${song.album_in.id}`} class="a1">
                        <i>{song.album_in.name + " (" + song.album_in.year_of_publish + ") "}</i>
                        <a href={`/band/${song.album_in.creator.id}`} class="a1">{song.album_in.creator.name}</a>
                    </a>
                </p>
                {
                    song.talk_about !== undefined &&
                    <>
                        <p><b>Temas que aborda:</b></p>
                        <ul>
                            {
                                song.talk_about.books.map((book) => {
                                    return(
                                        <li><a href={`/book/id/${book.id}`} class="a1">{book.title}</a></li>
                                    );
                                })
                            }
                            {
                                song.talk_about.events.map((event) => {
                                    return(
                                        <li><a href={`/event/id/${event.id}`} class="a1">{event.name}</a></li>
                                    );
                                })
                            }
                            {
                                song.talk_about.festivities.map((festivity) => {
                                    return(
                                        <li><a href={`/festivity/id/${festivity.id}`} class="a1">{festivity.name}</a></li>
                                    );
                                })
                            }
                            {
                                song.talk_about.heraldries.map((heraldry) => {
                                    return(
                                        <li><a href={`/heraldry/id/${heraldry.id}`} class="a1">{heraldry.name}</a></li>
                                    );
                                })
                            }
                            {
                                song.talk_about.legends.map((legend) => {
                                    return(
                                        <li><a href={`/legend/id/${legend.id}`} class="a1">{legend.name}</a></li>
                                    );
                                })
                            }
                            {
                                song.talk_about.miths.map((mith) => {
                                    return(
                                        <li><a href={`/mith/id/${mith.id}`} class="a1">{mith.name}</a></li>
                                    );  
                                })
                            }
                            {
                                song.talk_about.monuments.map((monument) => {
                                    return(
                                        <li><a href={`/monument/id/${monument.id}`} class="a1">{monument.name}</a></li>
                                    );
                                })
                            }
                            {
                                song.talk_about.organizations.map((organization) => {
                                    return(
                                        <li><a href={`/organization/id/${organization.id}`} class="a1">{organization.name}</a></li>
                                    );
                                })
                            }
                            {
                                song.talk_about.people.map((person) => {
                                    return(
                                        <li>
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
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </>
                }
                {
                    (song.official_video !== undefined && song.official_video !== null && song.official_video !== "") &&
                    <div class="card_body">
                        <p style="align-items: center;"><b>Vídeo oficial:</b></p>
                        <iframe width="560" height="315" src={song.official_video}
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowFullScreen/>
                    </div>
                }
                {
                    (song.official_lyric_video !== undefined && song.official_lyric_video !== null && song.official_lyric_video !== "") &&
                    <div class="card_body">
                        <p><b>Vídeo oficial con la letra:</b></p>
                        <iframe width="560" height="315" src={song.official_lyric_video}
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowFullScreen/>
                    </div>
                }
                {
                    (song.official_cd_video !== undefined && song.official_cd_video !== null && song.official_cd_video !== "") &&
                    <div class="card_body">
                        <p><b>Vídeo oficial del CD:</b></p>
                        <iframe width="560" height="315" src={song.official_cd_video}
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowFullScreen/>
                    </div>
                }
            </div>
        </div>
    );
}

export default Page;