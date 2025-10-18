import { Handlers, FreshContext, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { PersonGQL } from "../../../types/history/Person.ts";
import Short_Album from "../../../components/Short_Album.tsx";
import Short_Song from "../../../components/Short_Song.tsx";

type Data = {
    people: PersonGQL[],
}

export const handler: Handlers<Data> = {
    GET: async (req: Request, ctx: FreshContext<unknown, Data>) =>{
        const url = new URL(req.url);
        
        const year = url.searchParams.get("year")?.replace("+", " ");
        const ac_dc = url.searchParams.get("ac_dc")?.replace("+", " ");
        const type = url.searchParams.get("type")?.replace("+", " ");
        const year_a = url.searchParams.get("year_a")?.replace("+", " ");
        const ac_dc_1 = url.searchParams.get("ac_dc_1")?.replace("+", " ");
        const year_b = url.searchParams.get("year_b")?.replace("+", " ");
        const ac_dc_2 = url.searchParams.get("ac_dc_2")?.replace("+", " ");
    
        if((!year && !ac_dc && !type) || (!year_a && !ac_dc_1 && !year_b && !ac_dc_2)){
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
                    return(
                        <div class="block">
                            <h1>
                                {
                                    person.country_from !== "China" &&
                                    <a href={`/person/id/${person.id}`} class="a1">{person.name + " " + person.surname}</a>
                                }
                                {
                                    person.country_from === "China" &&
                                    <a href={`/person/id/${person.id}`} class="a1">{person.surname + " " + person.name}</a>
                                }
                            </h1>
                            {
                                person.talked_about_in_song !== undefined && person.talked_about_in_song.length !== 0 &&
                                <>
                                    <h3>Canciones que abordan esta persona</h3>
                                    <div>
                                        {
                                            person.talked_about_in_song.map((song) => {
                                                return(
                                                    <Short_Song song={song}/>
                                                );
                                            })
                                        }
                                    </div>
                                </>
                            }
                            {
                                person.talked_about_in_album !== undefined && person.talked_about_in_album.length !== 0 &&
                                <>
                                    <h3>Albumes que abordan esta persona</h3>
                                    <div>
                                        {
                                            person.talked_about_in_album.map((album) => {
                                                return(
                                                    <Short_Album album={album}/>
                                                );
                                            })
                                        }
                                    </div>
                                </>
                            }
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Page;