import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { OrganizationGQL } from "../../../types/history/Organization.ts";
import Short_Album from "../../../components/Short_Album.tsx";
import Short_Song from "../../../components/Short_Song.tsx";
import Short_Event from "../../../components/Short_Event.tsx";
import Short_Person from "../../../components/Short_Person.tsx";

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
                    members !== undefined && members.length !== 0 &&
                    <>
                        <p><b>Miembros destacados de la organización:</b></p>
                        <div>
                            {
                                members.map((member) => {
                                    return(
                                        <Short_Person person={member}/>
                                    );
                                })
                            }
                        </div>
                    </>
                }
                {
                    events !== undefined && events.length !== 0 &&
                    <>
                        <p><b>Han participado en:</b></p>
                        <div>
                            {
                                events.map((event) => {
                                    <Short_Event event={event}/>
                                })
                            }
                        </div>
                    </>
                }
                {
                    songs !== undefined && songs.length !== 0  &&
                    <>
                        <p><b>Canciones que abordan esta organización:</b></p>
                        <div class={songs.length === 1 ? "group1" : (songs.length === 2 ? "group2" : "group")}>
                            {
                                songs.map((song) => {
                                    return(
                                        <Short_Song song={song}/>
                                    );
                                })
                            }
                        </div>
                    </>
                }
                {
                    albums !== undefined && albums.length !== 0  &&
                    <>
                        <p><b>Albumes que abordan esta organización:</b></p>
                        <div class={albums.length === 1 ? "group1" : (albums.length === 2 ? "group2" : "group")}>
                            {
                                albums.map((album) => {
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