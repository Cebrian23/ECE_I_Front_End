import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { PersonGQL } from "../../../types/history/Person.ts";

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

    console.log(person);

    return (
        <div>
            {
                person.country_from !== "China" &&
                <h1>Página de la persona "{person.name + " " + person.surname}"</h1>
            }
            {
                person.country_from === "China" &&
                <h1>Página de la persona "{person.surname + " " + person.name}"</h1>
            }
        </div>
    );
}

export default Page;