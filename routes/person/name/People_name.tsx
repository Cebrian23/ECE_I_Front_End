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
        
        const name = url.searchParams.get("name")?.replace("+", " ");
        const surname = url.searchParams.get("surname")?.replace("+", " ");
        
        if(name){
            if(surname){
                const data = await Axios.get<PersonGQL[]>(`https://ece-i-back-end-ii.deno.dev/people/complete_name?name=${name}&surname=${surname}`);
        
                return ctx.render({people: data.data});
            }
            else{
                const data = await Axios.get<PersonGQL[]>(`https://ece-i-back-end-ii.deno.dev/people/complete_name?name=${name}`);
        
                return ctx.render({people: data.data});
            }
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
                                    <h3>Canciones que abordan esta leyenda</h3>
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
                                    <h3>Albumes que abordan esta leyenda</h3>
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