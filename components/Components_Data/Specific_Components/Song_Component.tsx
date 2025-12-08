import { Album_Short } from "../../../types/music/Album.ts";
import { Topics_Short } from "../../../types/music/Topics.ts";

type Data = {
    name: string,
    album_in: Album_Short,
    talk_about?: Topics_Short,
    videos: boolean
}

const Song_Component = (props: Data) => {
    const name = props.name;
    const album_in = props.album_in;
    const band = album_in.creator;
    const talk_about = props.talk_about;
    const videos = props.videos;
    console.log(videos);

    return(
        <div class="card_head">
            <div>
                <p><b>Nombre: </b>{name}</p>
                <p><b>Album al que pertence: </b>
                    <a href={`/album/${album_in.id}`} class="a1">
                        <i>{album_in.name}</i>
                    </a>
                </p>
                <p><b>Año de publicación del album: </b>{album_in.year_of_publish}</p>
                <p><b>Banda autora del album: </b>
                    <a href={`/band/${band.id}`} class="a1">{band.name}</a>
                </p>
                {
                    (talk_about !== undefined &&
                    (talk_about.books.length > 0 || talk_about.events.length > 0 ||
                     talk_about.festivities.length > 0 || talk_about.heraldries.length > 0 ||
                     talk_about.legends.length > 0 || talk_about.miths.length > 0 ||
                     talk_about.monuments.length > 0 || talk_about.organizations.length > 0 ||
                     talk_about.people.length > 0
                    )) &&
                    <div>
                        <p><b>Temas que aborda:</b></p>
                        <ul>
                            {
                                talk_about.books.map((book) => {
                                    return(
                                        <li><a href={`/book/id/${book.id}`} class="a1">{book.title}</a></li>
                                    );
                                })
                            }
                            {
                                talk_about.events.map((event) => {
                                    return(
                                        <li><a href={`/event/id/${event.id}`} class="a1">{event.name}</a></li>
                                    );
                                })
                            }
                            {
                                talk_about.festivities.map((festivity) => {
                                    return(
                                        <li><a href={`/festivity/id/${festivity.id}`} class="a1">{festivity.name}</a></li>
                                    );
                                })
                            }
                            {
                                talk_about.heraldries.map((heraldry) => {
                                    return(
                                        <li><a href={`/heraldry/id/${heraldry.id}`} class="a1">{heraldry.name}</a></li>
                                    );
                                })
                            }
                            {
                                talk_about.legends.map((legend) => {
                                    return(
                                        <li><a href={`/legend/id/${legend.id}`} class="a1">{legend.name}</a></li>
                                    );
                                })
                            }
                            {
                                talk_about.miths.map((mith) => {
                                    return(
                                        <li><a href={`/mith/id/${mith.id}`} class="a1">{mith.name}</a></li>
                                    );  
                                })
                            }
                            {
                                talk_about.monuments.map((monument) => {
                                    return(
                                        <li><a href={`/monument/id/${monument.id}`} class="a1">{monument.name}</a></li>
                                    );
                                })
                            }
                            {
                                talk_about.organizations.map((organization) => {
                                    return(
                                        <li><a href={`/organization/id/${organization.id}`} class="a1">{organization.name}</a></li>
                                    );
                                })
                            }
                            {
                                talk_about.people.map((person) => {
                                    return(
                                        <li><a href={`/person/id/${person.id}`} class="a1">
                                                {
                                                   (person.country_from !== "China" && person.country_from !== "Imperio chino") &&
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
                                                    (person.country_from === "China" || person.country_from === "Imperio chino") &&
                                                    <>{person.surname + " " + person.name}</>
                                                }
                                            </a>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                }
                {
                    videos === true &&
                    <p><b>Videoclips:</b></p>
                }
            </div>
        </div>
    );
}

export default Song_Component;