import { Topics_Short } from "../../../types/music/Topics.ts";

type Data = {
    name: string,
    year_of_publish: number,
    band: {
        id: string,
        name: string,
    },
    songs?: {
        id: string,
        name: string,
    }[],
    conceptual_album: boolean,
    talk_about?: Topics_Short,
}

const Album_Component = (props: Data) => {
    const name = props.name;
    const year_of_publish = props.year_of_publish;
    const band = props.band;
    const songs = props.songs;
    const conceptual_album = props.conceptual_album;
    const talk_about = props.talk_about;

    return(
        <div class="card_head">
            <div>
                <p><b>Nombre del album: </b>{name}</p>
                <p><b>Año de publicación: </b>{year_of_publish}</p>
                <p><b>Banda autora: </b><a  href={`/band/${band.id}`} class="a1">{band.name}</a></p>
                {
                    songs !== undefined && songs.length > 0 &&
                    <div>
                        <p><b>Canciones destacadas:</b></p>
                        <ul>
                            {
                                songs.map((song) => {
                                    return(
                                        <li><a href={`/song/${song.id}`} class="a1">{song.name}</a></li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                }
                <p><b>¿Es un album conceptual? </b>
                    {
                        conceptual_album === true &&
                        <>Si</>
                    }
                    {
                        conceptual_album === false &&
                        <>No</>
                    }
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
                                                    person.country_from !== "China" &&
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
                                                    person.country_from === "China" &&
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
            </div>
        </div>
    );
}

export default Album_Component;