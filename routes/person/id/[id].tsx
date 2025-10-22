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
                    <>
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
                    </>
                }
                <p><b>País de origen: </b>{person.country_from}</p>
                <p><b>Oficio: </b>{person.historical_position}</p>
                {
                    person.member_of !== undefined && person.member_of.length !== 0 &&
                    <>
                        <p><b></b>Es miembro de:</p>
                        <div class="group">
                            {
                                person.member_of.map((org) => {
                                    return(
                                        <Short_Organization organization={org}/>
                                    );
                                })
                            }
                        </div>
                    </>
                }
                {
                    person.involved_in !== undefined && person.involved_in.length !== 0 &&
                    <>
                        <p><b></b>Ha participado en:</p>
                        <div class="group">
                            {
                                person.involved_in.map((event) => {
                                    <Short_Event event={event}/>
                                })
                            }
                        </div>
                    </>
                }
                {
                    person.talked_about_in_song !== undefined && person.talked_about_in_song.length !== 0  &&
                    <>
                        <p><b>Canciones que abordan esta persona:</b></p>
                        <div class="group">
                            {
                                person.talked_about_in_song.map((song) => {
                                    return(
                                        <Short_Song song={song}/>
                                    );
                                })
                            }
                        </div>
                    </>
                }
                {
                    person.talked_about_in_album !== undefined && person.talked_about_in_album.length !== 0  &&
                    <>
                        <p><b>Albumes que abordan esta persona:</b></p>
                        <div  class="group">
                            {
                                person.talked_about_in_album.map((album) => {
                                    return(
                                        <Short_Album album={album}/>
                                    );
                                })
                            }
                        </div>
                    </>
                }
            </div>
        </div>
    );
}

export default Page;