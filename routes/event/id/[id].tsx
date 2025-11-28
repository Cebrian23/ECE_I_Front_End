import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { EventGQL } from "../../../types/history/Event.ts";
import Component_Header from "../../../components/Components_Data/General_Components/Component_Header.tsx";
import Component_Songs from "../../../components/Components_Data/General_Components/Component_Songs.tsx";
import Component_Albums_I from "../../../components/Components_Data/General_Components/Component_Albums_I.tsx";
import Event_Component from "../../../components/Components_Data/Specific_Components/Event_Component.tsx";

type Data = {
    event: EventGQL,
}

export const handler: Handlers<Data> = {
    GET: async (_req: Request, ctx: FreshContext<unknown, Data>) =>{
        const id = ctx.params.id;

        const data = await Axios.get<EventGQL>(`https://ece-i-back-end-ii.deno.dev/event/id?id=${id}`);
        
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
            <Component_Header name={event.name} type="event"/>
            <Event_Component name={event.name} people={people} orgs={orgs}
                             start_date={start_date} end_date={end_date}
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