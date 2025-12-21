import { Handlers, FreshContext, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { EventGQL } from "../../../types/history/Event.ts";
import Short_Album from "../../../components/Shorter_Data/Short_Album.tsx";
import Short_Song from "../../../components/Shorter_Data/Short_Song.tsx";
import { Class_Selector } from "../../../utilities/utils_CSS.ts";

type Data = {
    year?: string,
    acdc?: string,
    limit?: string,
    type?: string,
    year_a?: string,
    acdc_1?: string,
    year_b?: string,
    acdc_2?: string,
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
                    
                    return ctx.render({events: data.data, year: year, acdc: ac_dc, limit: limit, type: type});
                }
                else if(type.valueOf() === "Inicio" && limit.valueOf() === "false"){
                    const data = await Axios.get<EventGQL[]>(`https://ece-i-back-end-ii.deno.dev/events/start_date?year=${year}&ac_dc=${ac_dc}`);
                    
                    return ctx.render({events: data.data, year: year, acdc: ac_dc, limit: limit, type: type});
                }
                else if(type.valueOf() === "Fin" && limit.valueOf() === "true"){
                    const data = await Axios.get<EventGQL[]>(`https://ece-i-back-end-ii.deno.dev/events/limit_end_date?year=${year}&ac_dc=${ac_dc}`);
                
                    return ctx.render({events: data.data, year: year, acdc: ac_dc, limit: limit, type: type});
                }
                else if(type.valueOf() === "Fin" && limit.valueOf() === "false"){
                    const data = await Axios.get<EventGQL[]>(`https://ece-i-back-end-ii.deno.dev/events/end_date?year=${year}&ac_dc=${ac_dc}`);
                
                    return ctx.render({events: data.data, year: year, acdc: ac_dc, limit: limit, type: type});
                }
            }
        }
        else if(year_a && year_b){
            const data = await Axios.get<EventGQL[]>(`https://ece-i-back-end-ii.deno.dev/events/double_date?year_a=${year_a}&ac_dc_1=${ac_dc_1}&year_b=${year_b}&ac_dc_2=${ac_dc_2}`);
    
            return ctx.render({events: data.data, year_a: year_a, acdc_1: ac_dc_1, year_b: year_b, acdc_2: ac_dc_2});
        }
        /*else if(century){
            if(type){}
            else{}
        }*/
        
        return ctx.render();
    }
}

const Page = (props: PageProps<Data>) => {
    const year = props.data.year;
    const acdc = props.data.acdc;
    const limit = props.data.limit;
    const type = props.data.type;
    const year_a = props.data.year_a;
    const acdc_1 = props.data.acdc_1;
    const year_b = props.data.year_b;
    const acdc_2 = props.data.acdc_2;
    const events = props.data.events;

    console.log(events);

    return(
        <div>
            {
                events.length === 0 && type === "Inicio" && limit === "true" && year !== undefined && acdc !== undefined &&
                <h1>No se ha encontrado ningún evento cuyo inicio haya sido a partir del {year + " " + acdc}</h1>
            }
            {
                events.length === 0 && type === "Fin" && limit === "true" && year !== undefined && acdc !== undefined &&
                <h1>No se ha encontrado ningún evento cuyo final haya sido hasta el {year + " " + acdc}</h1>
            }
            {
                events.length === 0 && type === "Inicio" && limit === "false" && year !== undefined && acdc !== undefined &&
                <h1>No se ha encontrado ningún evento cuyo inicio sea en el {year + " " + acdc}</h1>
            }
            {
                events.length === 0 && type === "Fin" && limit === "false" && year !== undefined && acdc !== undefined &&
                <h1>No se ha encontrado ningún evento cuyo final sea en el {year + " " + acdc}</h1>
            }
            {
                events.length === 0 && year_a !== undefined && year_b !== undefined && acdc_1 !== undefined && acdc_2 !== undefined &&
                <h1>No se ha encontrado ningún evento cuyo inicio y final esté situado entre el {year_a + " " + acdc_1} y el {year_b + " " + acdc_2}</h1>
            }
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