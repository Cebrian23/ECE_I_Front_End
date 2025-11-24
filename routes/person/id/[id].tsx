import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { PersonGQL } from "../../../types/history/Person.ts";
import Short_Album from "../../../components/Short_Album.tsx";
import Short_Song from "../../../components/Short_Song.tsx";
import { Class_Selector } from "../../../utilities/utils_CSS.ts";

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

    const birth_date = person.birth_date;
    const death_date = person.death_date;

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
            <div class="card_body">
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
                {
                    (birth_date?.normal_date !== null || death_date?.normal_date !== null) &&
                    <>
                        {
                            birth_date?.normal_date !== null && birth_date?.normal_date !== undefined &&
                            <>
                                <p>
                                    <b>Fecha de nacimiento: </b>
                                    {
                                        birth_date.normal_date.day !== null && birth_date.normal_date.day !== undefined &&
                                        <>{birth_date.normal_date.day + " de "}</>
                                    }
                                    {
                                        birth_date.normal_date.month !== null && birth_date.normal_date.month !== undefined &&
                                        <>{birth_date.normal_date.month + " de "} </>
                                    }
                                    {
                                        <>{birth_date.normal_date.year + " " + birth_date.normal_date.ac_dc}</>
                                    }
                                </p>
                            </>
                        }
                        {
                            death_date?.normal_date !== null && death_date?.normal_date !== undefined &&
                            <>
                                <p>
                                    <b>Fecha de fallecimiento: </b>
                                    {
                                        death_date.normal_date.day !== null && death_date.normal_date.day !== undefined &&
                                        <>{death_date.normal_date.day + " de "}</>
                                    }
                                    {
                                        death_date.normal_date.month !== null && death_date.normal_date.month !== undefined &&
                                        <>{death_date.normal_date.month + " de "} </>
                                    }
                                    {
                                        <>{death_date.normal_date.year + " " + death_date.normal_date.ac_dc}</>
                                    }
                                </p>
                            </>
                        }
                        {
                            death_date?.normal_date === null &&
                            <>
                                <p><b>Fecha de fallecimiento: </b>Desconocido</p>
                            </>
                        }
                    </>
                }
                {
                    birth_date?.normal_date === null && death_date?.normal_date === null &&
                    <>
                        {
                            (birth_date.century_date?.century === death_date.century_date?.century) &&
                            (birth_date.century_date?.ac_dc === death_date.century_date?.ac_dc) &&
                            <p><b>Siglo de nacimiento y fallecimiento</b>{birth_date.century_date?.century + " " + birth_date.century_date?.ac_dc}</p>
                        }
                        {
                            birth_date.century_date?.century !== death_date.century_date?.century &&
                            <>
                                <p><b>Siglo de nacimiento</b>{birth_date.century_date?.century + " " + birth_date.century_date?.ac_dc}</p>
                                <p><b>Siglo de fallecimiento</b>{death_date.century_date?.century + " " + death_date.century_date?.ac_dc}</p>
                            </>
                        }
                    </>
                }
                {
                    (birth_date === null) && (death_date === null) &&
                    <>
                        <p><b>¿Sigue vivo?</b></p>
                        {
                            person.still_alive === false &&
                            <>No</>
                        }
                        {
                            person.still_alive === true &&
                            <>Si</>
                        }
                    </>
                }
                <p><b>País de origen: </b>{person.country_from}</p>
                <p><b>Oficio: </b>{person.historical_position}</p>
                {
                    orgs !== undefined && orgs.length !== 0 &&
                    <div>
                        <p><b>Es miembro de:</b></p>
                        <ul style="line-height: 1.5;">
                            {
                                orgs.map((org) => {
                                    return(
                                        <li><a href={org.id} class="a1">{org.name}</a></li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                }
                {
                    events !== undefined && events.length !== 0 &&
                    <div>
                        <p><b>Ha participado en:</b></p>
                        <ul style="line-height: 1.5;">
                            {
                                events.map((event) => {
                                    return(
                                        <li><a href={event.name} class="a1">{event.name}</a></li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                }
            </div>
            <div>
                {
                    songs !== undefined && songs.length !== 0  &&
                    <div>
                        <p style="text-indent: 25%;"><b>Canciones que abordan la vida de esta persona:</b></p>
                        <div class={Class_Selector(songs, true)}>
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
                        <p style="text-indent: 25%;"><b>Albumes que abordan la vida de esta persona:</b></p>
                        <div class={Class_Selector(albums, true)}>
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