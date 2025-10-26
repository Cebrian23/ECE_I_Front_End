import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { PersonGQL } from "../../../types/history/Person.ts";
import Short_Album from "../../../components/Short_Album.tsx";
import Short_Event from "../../../components/Short_Event.tsx";
import Short_Song from "../../../components/Short_Song.tsx";
import Short_Organization from "../../../components/Short_Organization.tsx";

type Data = {
    person: PersonGQL,
}

export const handler: Handlers<Data> = {
    GET: async (_req: Request, ctx: FreshContext<unknown, Data>) =>{
        const id = ctx.params.id;

        const data = await Axios.get<PersonGQL>(`https://ece-i-back-end-ii.deno.dev/person/id?id=${id}`);
        
        return ctx.render({person: data.data});
    }
}

const Page = (props: PageProps<Data>) => {
    const person = props.data.person;
    const songs = person.talked_about_in_song;
    const albums = person.talked_about_in_album;
    const events = person.involved_in;
    const orgs = person.member_of;

    console.log(person);

    return (
        <div>
            <div class="card_head">
                {
                    person.country_from !== "China" &&
                    <h1>Página de la persona "
                        {
                            person.surname !== null &&
                            <>{person.name + " " + person.surname}</>
                        }
                        {
                            person.surname === null &&
                            <>{person.name}</>
                        }
                    "</h1>
                }
                {
                    person.country_from === "China" &&
                    <h1>Página de la persona "{person.surname + " " + person.name}"</h1>
                }
                <img src={person.image}/>
            </div>
            <div>
                <p>
                    <b>Nombre completo: </b>
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
                </p>
                {
                    person.nickname !== null && person.nickname !== undefined && person.nickname.length > 0 &&
                    <div>
                        <p><b>Apodos:</b></p>
                        <ul>
                            {
                                person.nickname.map((nick) => {
                                    return(
                                        <li>{nick}</li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                }
                <p><b>País de origen: </b>{person.country_from}</p>
                <p><b>Oficio: </b>{person.historical_position}</p>
                {
                    orgs !== undefined && orgs.length !== 0 &&
                    <div>
                        <p><b></b>Es miembro de:</p>
                        <div>
                            {
                                orgs.map((org) => {
                                    return(
                                        <Short_Organization organization={org}/>
                                    );
                                })
                            }
                        </div>
                    </div>
                }
                {
                    events !== undefined && events.length !== 0 &&
                    <div>
                        <p><b></b>Ha participado en:</p>
                        <div>
                            {
                                events.map((event) => {
                                    <Short_Event event={event}/>
                                })
                            }
                        </div>
                    </div>
                }
                {
                    songs !== undefined && songs.length !== 0  &&
                    <div>
                        <p><b>Canciones que abordan esta persona:</b></p>
                        <div class={songs.length === 1 ? "group1" : (songs.length === 2 ? "group2" : "group")}>
                            {
                                songs.map((song) => {
                                    return(
                                        <Short_Song song={song}/>
                                    );
                                })
                            }
                        </div>
                    </div>
                }
                {
                    albums !== undefined && albums.length !== 0  &&
                    <div>
                        <p><b>Albumes que abordan esta persona:</b></p>
                        <div  class={albums.length === 1 ? "group1" : (albums.length === 2 ? "group2" : "group")}>
                            {
                                albums.map((album) => {
                                    return(
                                        <Short_Album album={album}/>
                                    );
                                })
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default Page;