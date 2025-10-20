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

        const data = await Axios.get<EventGQL>(`https://ece-i-back-end-ii.deno.dev/event/id?id=${id}`);
        
        return ctx.render({event: data.data});
    }
}

const Page = (props: PageProps<Data>) => {
    const event = props.data.event;

    console.log(event);

    return (
        <div>
            <div class="card_head">
                <h1>Página del evento "{event.name}"</h1>
            </div>
            <div>
                <p><b>Nombre: </b>{event.name}</p>
                {}
                {}
                {}
                {}
                {
                    event.people_involved !== undefined && event.people_involved.length !== 0 &&
                    <>
                        {
                            event.people_involved.map((person) => {
                                return(
                                    <Short_Person person={person}/>
                                );
                            })
                        }
                    </>
                }
                {
                    event.organizations_involved !== undefined && event.organizations_involved.length !== 0 &&
                    <>
                        {
                            event.organizations_involved.map((org) => {
                                return(
                                    <Short_Organization organization={org}/>
                                );
                            })
                        }
                    </>
                }
                {
                    event.talked_about_in_song !== undefined && event.talked_about_in_song.length !== 0  &&
                    <>
                        <p>Canciones que abordan este evento:</p>
                        <div>
                            {
                                event.talked_about_in_song.map((song) => {
                                    return(
                                        <Short_Song song={song}/>
                                    );
                                })
                            }
                        </div>
                    </>
                }
                {
                    event.talked_about_in_album !== undefined && event.talked_about_in_album.length !==0  &&
                    <>
                        <p>Albumes que abordan este evento:</p>
                        <div>
                            {
                                event.talked_about_in_album.map((album) => {
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