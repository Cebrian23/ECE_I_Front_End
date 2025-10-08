import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { PersonDB } from "../../types/history/Person.ts";

type Data = {
    person?: PersonDB,
}

export const handler: Handlers<Data> = {
    GET: async (req: Request, ctx: FreshContext<unknown, Data>) =>{
        const id = ctx.params.id;

        //
        
        return ctx.render({});
    }
}

const Page = (props: PageProps<Data>) => {
    const person = props.data.person;

    return (
        <div>
            {
                person !== undefined &&
                <div>
                    <div>
                        <h1>Página de {person.name + " " + person.surname}</h1>
                        <img src={person.image}/>
                    </div>
                    <div>
                        <p><b>Nombre completo: </b>{person.name + " " + person.surname}</p>
                    </div>
                </div>
            }
        </div>
    );
}

export default Page;