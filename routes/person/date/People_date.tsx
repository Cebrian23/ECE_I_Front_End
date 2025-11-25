import { Handlers, FreshContext, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { PersonGQL } from "../../../types/history/Person.ts";
import Short_Album from "../../../components/Short_Album.tsx";
import Short_Song from "../../../components/Short_Song.tsx";
import { Class_Selector } from "../../../utilities/utils_CSS.ts";

type Data = {
    people: PersonGQL[],
}

export const handler: Handlers<Data> = {
    GET: async (req: Request, ctx: FreshContext<unknown, Data>) =>{
        const url = new URL(req.url);
        
        const year = url.searchParams.get("year")?.replace("%20", " ");
        const ac_dc = url.searchParams.get("ac_dc")?.replace("%20", " ");
        const type = url.searchParams.get("type")?.replace("%20", " ");
        const year_a = url.searchParams.get("year_a")?.replace("%20", " ");
        const ac_dc_1 = url.searchParams.get("ac_dc_1")?.replace("%20", " ");
        const year_b = url.searchParams.get("year_b")?.replace("%20", " ");
        const ac_dc_2 = url.searchParams.get("ac_dc_2")?.replace("%20", " ");
    
        if((!year && !ac_dc && !type) && (!year_a && !ac_dc_1 && !year_b && !ac_dc_2)){
            return ctx.render();
        }
        
        if(year){
            if(type!.valueOf() === "Inicio"){
                const data = await Axios.get<PersonGQL[]>(`https://ece-i-back-end-ii.deno.dev/people/birth_date?year=${year}&ac_dc=${ac_dc}`);
        
                return ctx.render({people: data.data});
            }
            else if(type!.valueOf() === "Fin"){
                const data = await Axios.get<PersonGQL[]>(`https://ece-i-back-end-ii.deno.dev/people/death_date?year=${year}&ac_dc=${ac_dc}`);
        
                return ctx.render({people: data.data});
            }
        }
        else if(year_a && year_b){
            const data = await Axios.get<PersonGQL[]>(`https://ece-i-back-end-ii.deno.dev/people/double_date?year_a=${year_a}&ac_dc_1=${ac_dc_1}&year_b=${year_b}&ac_dc_2=${ac_dc_2}`);
        
            return ctx.render({people: data.data});
        }
        
        return ctx.render();
    }
}

const Page = (props: PageProps<Data>) => {
    const people = props.data.people;

    console.log(people);

    return(
        <div>
            {
                people.map((person) => {
                    const songs = person.talked_about_in_song;
                    const albums = person.talked_about_in_album;

                    return(
                        <div class="block">
                            <h1>
                                {
                                    person.country_from !== "China" &&
                                    <a href={`/person/id/${person.id}`} class="a1">
                                        {
                                            person.surname !== null &&
                                            <>{person.name + " " + person.surname}</>
                                        }
                                        {
                                            person.surname === null &&
                                            <>{person.name}</>
                                        }
                                    </a>
                                }
                                {
                                    person.country_from === "China" &&
                                    <a href={`/person/id/${person.id}`} class="a1">{person.surname + " " + person.name}</a>
                                }
                            </h1>
                            {
                                songs !== undefined && songs.length !== 0 &&
                                <>
                                    <h3>Canciones que abordan esta persona</h3>
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
                                    <h3>Albumes que abordan esta persona</h3>
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
                                people.length > 1 &&
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