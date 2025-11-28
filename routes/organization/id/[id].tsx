import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { OrganizationGQL } from "../../../types/history/Organization.ts";
import Component_Header from "../../../components/Components_Data/General_Components/Component_Header.tsx";
import Component_Songs from "../../../components/Components_Data/General_Components/Component_Songs.tsx";
import Component_Albums_I from "../../../components/Components_Data/General_Components/Component_Albums_I.tsx";
import Organization_Component from "../../../components/Components_Data/Specific_Components/Organization_Component.tsx";

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
            <Component_Header name={organization.name} type="organization"/>
            <Organization_Component name={organization.name} members={members} involved_in={events}
                                    creation_date={creation_date} dissolution_date={dissolution_date}
                                    still_exists={organization.still_exists}
            />
            <div class="card_songs_albums">
                {
                    songs !== undefined && songs.length !== 0  &&
                    <Component_Songs songs={songs}/>
                }
            </div>
            <div class="card_songs_albums">
                {
                    albums !== undefined && albums.length !== 0  &&
                    <Component_Albums_I albums={albums}/>
                }
            </div>
        </div>
    );
}

export default Page;