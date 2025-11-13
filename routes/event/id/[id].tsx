import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { EventGQL } from "../../../types/history/Event.ts";
import Short_Album from "../../../components/Short_Album.tsx";
import Short_Song from "../../../components/Short_Song.tsx";
import { Class_Selector } from "../../../utilities/utils_CSS.ts";

type Data = {
    event: EventGQL,
}

export const handler: Handlers<Data> = {
    GET: async (_req: Request, ctx: FreshContext<unknown, Data>) =>{
        const id = ctx.params.id;
        console.log(id);
        const data = await Axios.get<EventGQL>(`https://ece-i-back-end-ii.deno.dev/event/id?id=${id}`);
        console.log(data.data);
        
        return ctx.render({event: data.data});
    }
}

const Page = (props: PageProps<Data>) => {
    const event = props.data.event;
    const people = event.people_involved;
    const orgs = event.organizations_involved;
    const songs = event.talked_about_in_song;
    const albums = event.talked_about_in_album;
    
    const start_date = event.start_date;
    const end_date = event.end_date;

    console.log(event);

    return (
        <div>
            <div class="card_head">
                <h1>Página del evento "{event.name}"</h1>
            </div>
            <div>
                <p><b>Nombre: </b>{event.name}</p>
                {
                    (start_date?.normal_date !== null || end_date?.normal_date !== null) &&
                    <>
                        {
                            (start_date?.normal_date?.day === end_date?.normal_date?.day) &&
                            (start_date?.normal_date?.month === end_date?.normal_date?.month) &&
                            (start_date?.normal_date?.year === end_date?.normal_date?.year) &&
                            (start_date?.normal_date?.ac_dc === end_date?.normal_date?.ac_dc) &&
                            <p>
                                <b>Fecha del evento: </b>
                                {
                                    start_date?.normal_date?.day !== null && start_date?.normal_date?.day !== undefined &&
                                    <>{start_date?.normal_date?.day + " de "}</>
                                }
                                {
                                    start_date?.normal_date?.month !== null && start_date?.normal_date?.month !== undefined &&
                                    <>{start_date?.normal_date?.month + " de "} </>
                                }
                                {
                                    <>{start_date?.normal_date?.year + " " + start_date?.normal_date?.ac_dc}</>
                                }
                            </p>
                        }
                        {
                            (start_date?.normal_date?.day !== end_date?.normal_date?.day) &&
                            (start_date?.normal_date?.month !== end_date?.normal_date?.month) &&
                            (start_date?.normal_date?.year !== end_date?.normal_date?.year) &&
                            (start_date?.normal_date?.ac_dc !== end_date?.normal_date?.ac_dc) &&
                            <>
                                <p>
                                    <b>Fecha de inicio: </b>
                                    {
                                        start_date?.normal_date?.day !== null && start_date?.normal_date?.day !== undefined &&
                                        <>{start_date?.normal_date?.day + " de "}</>
                                    }
                                    {
                                        start_date?.normal_date?.month !== null && start_date?.normal_date?.month !== undefined &&
                                        <>{start_date?.normal_date?.month + " de "} </>
                                    }
                                    {
                                        <>{start_date?.normal_date?.year + " " + start_date?.normal_date?.ac_dc}</>
                                    }
                                </p>
                                <p>
                                    <b>Fecha de fin: </b>
                                    {
                                        end_date?.normal_date?.day !== null && end_date?.normal_date?.day !== undefined &&
                                        <>{end_date.normal_date.day + " de "}</>
                                    }
                                    {
                                        end_date?.normal_date?.month !== null && end_date?.normal_date?.month !== undefined &&
                                        <>{end_date.normal_date.month + " de "} </>
                                    }
                                    {
                                        <>{end_date?.normal_date?.year + " " + end_date?.normal_date?.ac_dc}</>
                                    }
                                </p>
                            </>
                        }
                        {
                            end_date?.normal_date === null && event.still_active === false &&
                            <p><b>Fecha de fin: </b>Desconocido</p>
                        }
                    </>
                }
                {
                    start_date?.normal_date === null && end_date?.normal_date === null &&
                    <>
                        {
                            (start_date.century_date?.century === end_date.century_date?.century) &&
                            (start_date.century_date?.ac_dc === end_date.century_date?.ac_dc) &&
                            <p><b>Siglo de nacimiento y fallecimiento</b>{start_date.century_date?.century + " " + start_date.century_date?.ac_dc}</p>
                        }
                        {
                            end_date.century_date?.century !== end_date.century_date?.century &&
                            <>
                                <p><b>Siglo de nacimiento</b>{start_date.century_date?.century + " " + start_date.century_date?.ac_dc}</p>
                                <p><b>Siglo de fallecimiento</b>{end_date.century_date?.century + " " + end_date.century_date?.ac_dc}</p>
                            </>
                        }
                    </>
                }
                {
                    (start_date === null) && (end_date === null) &&
                    <>
                        <p><b>¿Sigue activo?</b></p>
                        {
                            event.still_active === false &&
                            <>No</>
                        }
                        {
                            event.still_active === true &&
                            <>Si</>
                        }
                    </>
                }
                {
                    people !== undefined && people.length !== 0 &&
                    <div>
                        <p><b>Personas involucradas:</b></p>
                        <ul>
                            {
                                people.map((person) => {
                                    return(
                                        <>
                                            {
                                                person.country_from !== "China" &&
                                                <>
                                                    {
                                                        person.surname !== undefined && person.surname !== null &&
                                                        <li><a href={person.id} class="a1">{person.name + " " + person.surname}</a></li>
                                                    }
                                                    {
                                                        person.surname === undefined && person.surname === null &&
                                                        <li><a href={person.id} class="a1">{person.name}</a></li>
                                                    }
                                                </>
                                            }
                                            {
                                                person.country_from === "China" &&
                                                <>
                                                    {
                                                        person.surname !== undefined && person.surname !== null &&
                                                        <li><a href={person.id} class="a1">{person.surname + " " + person.name}</a></li>
                                                    }
                                                    {
                                                        person.surname === undefined && person.surname === null &&
                                                        <li><a href={person.id} class="a1">{person.name}</a></li>
                                                    }
                                                </>
                                            }
                                        </>
                                    );
                                })
                            }
                        </ul>
                    </div>
                }
                {
                    orgs !== undefined && orgs.length !== 0 &&
                    <div>
                        <p><b>Organizaciones involucradas:</b></p>
                        <ul>
                            {
                                orgs.map((org) => {
                                    return(
                                        <li><a href={org.name} class="a1">{org.name}</a></li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                }
                {
                    songs !== undefined && songs.length !== 0  &&
                    <div>
                        <p><b>Canciones que abordan este evento:</b></p>
                        <div class={Class_Selector(songs)}>
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
                        <p><b>Albumes que abordan este evento:</b></p>
                        <div class={Class_Selector(albums)}>
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