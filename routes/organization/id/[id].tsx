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

    console.log(organization);

    return (
        <div>
            <div class="card_head">
                <h1>Página de la organization "{organization.name}"</h1>
                <img src={organization.logo}/>
            </div>
            <div>
                <p><b>Nombre: </b>{organization.name}</p>
                {}
                {}
                {}
                {}
                {
                    organization.distinguished_members !== undefined && organization.distinguished_members.length !== 0 &&
                    <>
                        <p>Miembros destacados de la organización:</p>
                        <div>
                            {
                                organization.distinguished_members.map((member) => {
                                    return(
                                        <Short_Person person={member}/>
                                    );
                                })
                            }
                        </div>
                    </>
                }
                {
                    organization.involved_in !== undefined && organization.involved_in.length !== 0 &&
                    <>
                        <p>Ha participado en:</p>
                        <div>
                            {
                                organization.involved_in.map((event) => {
                                    <Short_Event event={event}/>
                                })
                            }
                        </div>
                    </>
                }
                {
                    organization.talked_about_in_song !== undefined && organization.talked_about_in_song.length !== 0  &&
                    <>
                        <p>Canciones que abordan esta organización:</p>
                        <div>
                            {
                                organization.talked_about_in_song.map((song) => {
                                    return(
                                        <Short_Song song={song}/>
                                    );
                                })
                            }
                        </div>
                    </>
                }
                {
                    organization.talked_about_in_album !== undefined && organization.talked_about_in_album.length !== 0  &&
                    <>
                        <p>Albumes que abordan esta organización:</p>
                        <div>
                            {
                                organization.talked_about_in_album.map((album) => {
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