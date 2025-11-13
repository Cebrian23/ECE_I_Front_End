import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { OrganizationGQL } from "../../../types/history/Organization.ts";
import Short_Album from "../../../components/Short_Album.tsx";
import Short_Song from "../../../components/Short_Song.tsx";
import { Class_Selector } from "../../../utilities/utils_CSS.ts";

type Data = {
    organization: OrganizationGQL,
}

export const handler: Handlers<Data> = {
    GET: async (_req: Request, ctx: FreshContext<unknown, Data>) =>{
        const id = ctx.params.id;

        const data = await Axios.get<OrganizationGQL>(`https://ece-i-back-end-ii.deno.dev/organization/id?id=${id}`);
        
        return ctx.render({organization: data.data});
    }
}

const Page = (props: PageProps<Data>) => {
    const organization = props.data.organization;
    const songs = organization.talked_about_in_song;
    const albums = organization.talked_about_in_album;
    const members = organization.distinguished_members;
    const events = organization.involved_in;

    const creation_date = organization.creation;
    const dissolution_date = organization.dissolution;

    console.log(organization);

    return (
        <div>
            <div class="card_head">
                <h1>Página de la organization "{organization.name}"</h1>
                <img src={organization.logo}/>
            </div>
            <div>
                <p><b>Nombre: </b>{organization.name}</p>
                {
                    (creation_date?.normal_date !== null || dissolution_date?.normal_date !== null) &&
                    <>
                        {
                            creation_date?.normal_date !== null && creation_date?.normal_date !== undefined &&
                            <>
                                <p>
                                    <b>Fecha de creación: </b>
                                    {
                                        creation_date.normal_date.day !== null && creation_date.normal_date.day !== undefined &&
                                        <>{creation_date.normal_date.day + " de "}</>
                                    }
                                    {
                                        creation_date.normal_date.month !== null && creation_date.normal_date.month !== undefined &&
                                        <>{creation_date.normal_date.month + " de "}</>
                                    }
                                    {
                                        <>{creation_date.normal_date.year + " " + creation_date.normal_date.ac_dc}</>
                                    }
                                </p>
                            </>
                        }
                        {
                            dissolution_date?.normal_date !== null && dissolution_date?.normal_date !== undefined &&
                            <>
                                <p>
                                    <b>Fecha de disolución: </b>
                                    {
                                        dissolution_date.normal_date.day !== null && dissolution_date.normal_date.day !== undefined &&
                                        <>{dissolution_date.normal_date.day + " de "}</>
                                    }
                                    {
                                        dissolution_date.normal_date.month !== null && dissolution_date.normal_date.month !== undefined &&
                                        <>{dissolution_date.normal_date.month + " de "} </>
                                    }
                                    {
                                        <>{dissolution_date.normal_date.year + " " + dissolution_date.normal_date.ac_dc}</>
                                    }
                                </p>
                            </>
                        }
                        {
                            dissolution_date?.normal_date === null &&
                            <>
                                <p><b>Fecha de disolución: </b>Desconocido</p>
                            </>
                        }
                    </>
                }
                {
                    creation_date?.normal_date === null && dissolution_date?.normal_date === null &&
                    <>
                        {
                            (creation_date.century_date?.century === dissolution_date.century_date?.century) &&
                            (creation_date.century_date?.ac_dc === dissolution_date.century_date?.ac_dc) &&
                            <p><b>Siglo de creación y disolución</b>{creation_date.century_date?.century + " " + creation_date.century_date?.ac_dc}</p>
                        }
                        {
                            creation_date.century_date?.century !== dissolution_date.century_date?.century &&
                            <>
                                <p><b>Siglo de creación</b>{creation_date.century_date?.century + " " + creation_date.century_date?.ac_dc}</p>
                                <p><b>Siglo de disolución</b>{dissolution_date.century_date?.century + " " + dissolution_date.century_date?.ac_dc}</p>
                            </>
                        }
                    </>
                }
                {
                    (creation_date === null) && (dissolution_date === null) &&
                    <>
                        <p><b>¿Sigue existiendo?</b></p>
                        {
                            organization.still_exists === false &&
                            <>No</>
                        }
                        {
                            organization.still_exists === true &&
                            <>Si</>
                        }
                    </>
                }
                {
                    members !== undefined && members.length !== 0 &&
                    <div>
                        <p><b>Miembros destacados de la organización:</b></p>
                        <div>
                            {
                                members.map((member) => {
                                    return(
                                        <>
                                            {
                                                member.country_from !== "China" &&
                                                <>
                                                    {
                                                        member.surname !== undefined && member.surname !== null &&
                                                        <li><a href={member.id} class="a1">{member.name + " " + member.surname}</a></li>
                                                    }
                                                    {
                                                        member.surname === undefined && member.surname === null &&
                                                        <li><a href={member.id} class="a1">{member.name}</a></li>
                                                    }
                                                </>
                                            }
                                            {
                                                member.country_from === "China" &&
                                                <>
                                                    {
                                                        member.surname !== undefined && member.surname !== null &&
                                                        <li><a href={member.id} class="a1">{member.surname + " " + member.name}</a></li>
                                                    }
                                                    {
                                                        member.surname === undefined && member.surname === null &&
                                                        <li><a href={member.id} class="a1">{member.name}</a></li>
                                                    }
                                                </>
                                            }
                                        </>
                                    );
                                })
                            }
                        </div>
                    </div>
                }
                {
                    events !== undefined && events.length !== 0 &&
                    <div>
                        <p><b>Han participado en:</b></p>
                        <ul>
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
                {
                    songs !== undefined && songs.length !== 0  &&
                    <div>
                        <p><b>Canciones que abordan esta organización:</b></p>
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
                        <p><b>Albumes que abordan esta organización:</b></p>
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