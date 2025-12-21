import { Handlers, FreshContext, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { PersonGQL } from "../../../types/history/Person.ts";
import Short_Album from "../../../components/Shorter_Data/Short_Album.tsx";
import Short_Song from "../../../components/Shorter_Data/Short_Song.tsx";
import { Class_Selector } from "../../../utilities/utils_CSS.ts";

type Data = {
    people: PersonGQL[],
}

export const handler: Handlers<Data> = {
    GET: async (_req: Request, ctx: FreshContext<unknown, Data>) =>{
        const data = await Axios.get<PersonGQL[]>("https://ece-i-back-end-ii.deno.dev/people");
        
        return ctx.render({people: data.data});
    }
}

const Page = (props: PageProps<Data>) => {
    const people = props.data.people;

    console.log(people);

    return(
        <div>
            {
                people.length === 0 &&
                <h1>No se ha encontrado ninguna persona</h1>
            }
            {
                people.map((person) => {
                    const songs = person.talked_about_in_song;
                    const albums = person.talked_about_in_album;

                    return(
                        <div class="block">
                            <h1>
                                {
                                    (person.country_from !== "China" && person.country_from !== "Imperio chino") &&
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
                                    (person.country_from === "China" || person.country_from === "Imperio chino") &&
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