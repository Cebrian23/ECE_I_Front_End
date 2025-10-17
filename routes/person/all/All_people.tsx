import { Handlers, FreshContext, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { PersonGQL } from "../../../types/history/Person.ts";

type Data = {
    people: PersonGQL[],
}

export const handler: Handlers<Data> = {
    GET: async (_req: Request, ctx: FreshContext<unknown, Data>) =>{
        const data = await Axios.get<PersonGQL[]>("https://ece-i-back-end-ii.deno.dev/people");

        console.log(data.data[0].talked_about_in_song);
        
        return ctx.render({people: data.data});
    }
}

const Page = (props: PageProps<Data>) => {
    const people = props.data.people;

    //console.log(people);

    return(
        <div>
            {
                people.map((person) => {
                    return(
                        <div>
                            <div>
                                <h1>
                                    {
                                        person.country_from !== "China" &&
                                        <>{person.name + " " + person.surname}</>
                                    }
                                    {
                                        person.country_from === "China" &&
                                        <>{person.surname + " " + person.name}</>
                                    }
                                </h1>
                            </div>
                            <div>
                                {
                                    person.talked_about_in_song !== undefined && person.talked_about_in_song.length !== 0 &&
                                    <>
                                        <h3>Canciones que abordan esta leyenda</h3>
                                        <div>
                                            {
                                                person.talked_about_in_song.map((song) => {
                                                    return(
                                                        <div>
                                                            <image src={song.cover}/>
                                                            <p><a href={song.id}>{song.name}</a></p>
                                                            <i><a href={song.album_in.id}>{song.album_in.name + " (" + song.album_in.year_of_publish + ")"}</a></i>
                                                        </div>
                                                    );
                                                })
                                            }
                                        </div>
                                    </>
                                }
                            </div>
                            <div>
                                {
                                    person.talked_about_in_album !== undefined && person.talked_about_in_album.length !== 0 &&
                                    <>
                                        <h3>Albumes que abordan esta leyenda</h3>
                                        <div>
                                            {
                                                person.talked_about_in_album.map((album) => {
                                                    return(
                                                        <div>
                                                            <image src={album.cover}/>
                                                            <i><a href={album.id}>{album.name + " (" + album.year_of_publish + ")"}</a></i>
                                                        </div>
                                                    );
                                                })
                                            }
                                        </div>
                                    </>
                                }
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Page;