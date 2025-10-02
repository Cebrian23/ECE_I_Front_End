import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { PersonDB } from "../../types/history/Person.ts";

type Data = {
    person?: PersonDB,
}

const handler: Handlers<Data> = {
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
                        <p>
                            <b>Fecha de nacimiento: </b>
                            {
                                person.birth_date.month !== undefined && person.birth_date.day !== undefined &&
                                <>{person.birth_date.day + " de " + person.birth_date.month + " de " + person.birth_date.year}</>
                            }
                            {
                                (person.birth_date.month !== undefined || person.birth_date.day !== undefined) &&
                                <>{person.birth_date.year}</>
                            }
                        </p>
                        {
                            person.death_date?.year !== undefined &&
                            <p>
                                <b>Fecha de fallecimiento: </b>
                                {
                                    person.death_date.month !== undefined && person.death_date.day !== undefined &&
                                    <>{person.death_date.day + " de " + person.death_date.month + " de " + person.death_date.year}</>
                                }
                                {
                                    (person.death_date.month !== undefined || person.death_date.day !== undefined) &&
                                    <>{person.death_date.year}</>
                                }
                            </p>
                        }
                    </div>
                </div>
            }
        </div>
    );
}

export default Page;