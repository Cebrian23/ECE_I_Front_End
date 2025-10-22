import { Handlers, FreshContext, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { EventGQL } from "../../../types/history/Event.ts";
import Short_Album from "../../../components/Short_Album.tsx";
import Short_Song from "../../../components/Short_Song.tsx";

type Data = {
    events: EventGQL[],
}

export const handler: Handlers<Data> = {
    GET: async (req: Request, ctx: FreshContext<unknown, Data>) =>{
        const url = new URL(req.url);
        
        const name = url.searchParams.get("name")?.replace("%20", " ");

        if(!name){
            return ctx.render();
        }
        
        const data = await Axios.get<EventGQL[]>(`https://ece-i-back-end-ii.deno.dev/events/name?name=${name}`);
        
        return ctx.render({events: data.data});
    }
}

const Page = (props: PageProps<Data>) => {
    const events = props.data.events;

    console.log(events);

    return(
        <div>
            {
                events.map((event) => {
                    return(
                        <div class="block">
                            <h1><a href={`/event/id/${event.id}`} class="a1">{event.name}</a></h1>
                            {
                                event.talked_about_in_song !== undefined && event.talked_about_in_song.length !== 0 &&
                                <>
                                    <h3>Canciones que abordan este evento</h3>
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
                                event.talked_about_in_album !== undefined && event.talked_about_in_album.length !== 0 &&
                                <>
                                    <h3>Albumes que abordan este evento</h3>
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
                            <hr width={500}/>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Page;