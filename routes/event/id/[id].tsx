import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { EventGQL } from "../../../types/history/Event.ts";
import Short_Album from "../../../components/Short_Album.tsx";
import Short_Song from "../../../components/Short_Song.tsx";
import Short_Person from "../../../components/Short_Person.tsx";
import Short_Organization from "../../../components/Short_Organization.tsx";

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

    console.log(event);

    return (
        <div>
            <div class="card_head">
                <h1>Página del evento "{event.name}"</h1>
            </div>
            <div>
                <p><b>Nombre: </b>{event.name}</p>
                {
                    people !== undefined && people.length !== 0 &&
                    <>
                        <p><b>Personas involucradas:</b></p>
                        <div>
                            {
                                people.map((person) => {
                                    return(
                                        <Short_Person person={person}/>
                                    );
                                })
                            }
                        </div>
                    </>
                }
                {
                    orgs !== undefined && orgs.length !== 0 &&
                    <>
                        <p><b>Organizaciones involucradas:</b></p>
                        <div>
                            {
                                orgs.map((org) => {
                                    return(
                                        <Short_Organization organization={org}/>
                                    );
                                })
                            }
                        </div>
                    </>
                }
                {
                    songs !== undefined && songs.length !== 0  &&
                    <>
                        <p><b>Canciones que abordan este evento:</b></p>
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
                        <p><b>Albumes que abordan este evento:</b></p>
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