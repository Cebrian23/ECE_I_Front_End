import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { PersonDB } from "../../types/history/Person.ts";

type Data = {
    person?: PersonDB,
}

const Person_id = `#graphql
    query Query ($id: String!) {
        getPerson_id (id: $id) {
            id
            name
            surname
            nickname
            image
            birth_date {}
            death_date {}
            historical_position
            involved_in {
                id
                name
            }
            member_of {
                id
                name
                image
            }
            talk_about_in_song {
                id
                name
                cover
                year_of_publish
                album_in {
                    id
                    name
                    creator {
                        id
                        name
                    }
                }
            }
            talk_about_in_album {
                id
                name
                cover
                year_of_publish
                creator {
                    id
                    name
                }
            }
        }
    }
`

const Person_name = `#graphql
    query Query ($name: String!) {
        getPerson_name (name: $name) {
            id
            name
            surname
            nickname
            image
            birth_date {}
            death_date {}
            historical_position
            involved_in {
                id
                name
            }
            member_of {
                id
                name
                image
            }
            talk_about_in_song {
                id
                name
                cover
                year_of_publish
                album_in {
                    id
                    name
                    creator {
                        id
                        name
                    }
                }
            }
            talk_about_in_album {
                id
                name
                cover
                year_of_publish
                creator {
                    id
                    name
                }
            }
        }
    }
`

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