import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { PersonGQL } from "../../../types/history/Person.ts";
import Component_Header from "../../../components/Components_Data/General_Components/Component_Header.tsx";
import Component_Songs from "../../../components/Components_Data/General_Components/Component_Songs.tsx";
import Component_Albums_I from "../../../components/Components_Data/General_Components/Component_Albums_I.tsx";
import Person_Component from "../../../components/Components_Data/Specific_Components/Person_Component.tsx";

type Data = {
    person: PersonGQL,
}

export const handler: Handlers<Data> = {
    GET: async (_req: Request, ctx: FreshContext<unknown, Data>) =>{
        const id = ctx.params.id;

        const data = await Axios.get<PersonGQL>(`https://ece-i-back-end-ii.deno.dev/person/id?id=${id}`);
        
        return ctx.render({person: data.data});
    }
}

const Page = (props: PageProps<Data>) => {
    const person = props.data.person;
    const songs = person.talked_about_in_song;
    const albums = person.talked_about_in_album;
    const events = person.involved_in;
    const orgs = person.member_of;

    const birth_date = person.birth_date;
    const death_date = person.death_date;

    console.log(person);

    return (
        <div>
            <Component_Header name={person.name} surname={person.surname} nation_people={person.country_from} type="person"/>
            <Person_Component name={person.name} surname={person.surname} nickname={person.nickname}
                              country_from={person.country_from} historical_position={person.historical_position}
                              member_of={orgs} involved_in={events} still_alive = {person.still_alive}
                              birth_date={birth_date} death_date={death_date}
            />
            <div class="card_songs_albums">
                {
                    songs !== undefined && songs.length !== 0  &&
                    <Component_Songs songs={songs}/>
                }
            </div>
            <div class="card_songs_albums">
                {
                    albums !== undefined && albums.length !== 0  &&
                    <Component_Albums_I albums={albums}/>
                }
            </div>
        </div>
    );
}

export default Page;