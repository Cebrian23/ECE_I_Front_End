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
    GET: async (req: Request, ctx: FreshContext<unknown, Data>) =>{
        const url = new URL(req.url);
        
        const year = url.searchParams.get("year")?.replace("%20", " ");
        //const century = url.searchParams.get("century")?.replace("%20", " ");
        const ac_dc = url.searchParams.get("ac_dc")?.replace("%20", " ");
        const type = url.searchParams.get("type")?.replace("%20", " ");
        const limit = url.searchParams.get("limit")?.replace("%20", " ");
        const year_a = url.searchParams.get("year_a")?.replace("%20", " ");
        const ac_dc_1 = url.searchParams.get("ac_dc_1")?.replace("%20", " ");
        const year_b = url.searchParams.get("year_b")?.replace("%20", " ");
        const ac_dc_2 = url.searchParams.get("ac_dc_2")?.replace("%20", " ");

        if((!year && !ac_dc && !type) && (!year_a && !ac_dc_1 && !year_b && !ac_dc_2)){
            return ctx.render();
        }

        if(year){
            if(type && limit){
                if(type.valueOf() === "Inicio" && limit.valueOf() === "true"){
                    const data = await Axios.get<EventGQL[]>(`https://ece-i-back-end-ii.deno.dev/events/limit_start_date?year=${year}&ac_dc=${ac_dc}`);
                    
                    return ctx.render({events: data.data});
                }
                else if(type.valueOf() === "Inicio" && limit.valueOf() === "false"){
                    const data = await Axios.get<EventGQL[]>(`https://ece-i-back-end-ii.deno.dev/events/start_date?year=${year}&ac_dc=${ac_dc}`);
                    
                    return ctx.render({events: data.data});
                }
                else if(type.valueOf() === "Fin" && limit.valueOf() === "true"){
                    const data = await Axios.get<EventGQL[]>(`https://ece-i-back-end-ii.deno.dev/events/limit_end_date?year=${year}&ac_dc=${ac_dc}`);
                
                    return ctx.render({events: data.data});
                }
                else if(type.valueOf() === "Fin" && limit.valueOf() === "false"){
                    const data = await Axios.get<EventGQL[]>(`https://ece-i-back-end-ii.deno.dev/events/end_date?year=${year}&ac_dc=${ac_dc}`);
                
                    return ctx.render({events: data.data});
                }
            }
        }
        else if(year_a && year_b){
            const data = await Axios.get<EventGQL[]>(`https://ece-i-back-end-ii.deno.dev/events/double_date?year_a=${year_a}&ac_dc_1=${ac_dc_1}&year_b=${year_b}&ac_dc_2=${ac_dc_2}`);
    
            return ctx.render({events: data.data});
        }
        /*else if(century){
            if(type){}
            else{}
        }*/
        
        return ctx.render();
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