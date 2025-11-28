import { Handlers, FreshContext, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { EventGQL } from "../../../types/history/Event.ts";
import Short_Album from "../../../components/Shorter_Data/Short_Album.tsx";
import Short_Song from "../../../components/Shorter_Data/Short_Song.tsx";
import { Class_Selector } from "../../../utilities/utils_CSS.ts";

type Data = {
    events: EventGQL[],
}

export const handler: Handlers<Data> = {
    GET: async (_req: Request, ctx: FreshContext<unknown, Data>) =>{
        const data = await Axios.get<EventGQL[]>("https://ece-i-back-end-ii.deno.dev/events");
        
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
                    const songs = event.talked_about_in_song;
                    const albums = event.talked_about_in_album;

                    return(
                        <div class="block">
                            <h1><a href={`/event/id/${event.id}`} class="a1">{event.name}</a></h1>
                            {
                                songs !== undefined && songs.length !== 0 &&
                                <>
                                    <h3>Canciones que abordan este evento</h3>
                                    <div class={Class_Selector(songs)}>
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
                                albums !== undefined && albums.length !== 0 &&
                                <>
                                    <h3>Albumes que abordan este evento</h3>
                                    <div class={Class_Selector(albums)}>
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
                            {
                                events.length > 1 &&
                                <hr width={500}/>
                            }
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Page;