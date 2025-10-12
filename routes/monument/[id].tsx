import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { MonumentDB } from "../../types/history/Monument.ts";

type Data = {
    monument?: MonumentDB,
}

const Organization_id = `#graphql
    query Query ($id: String!) {
        getOrganization_id (id: $id) {
            id
            name
            creation {}
            distruction {}
            still_exists
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
    const monument = props.data.monument;
    return (
        <div>
            {
                monument !== undefined &&
                <div>
                    <div>
                        <h1>Página de {monument.name}</h1>
                    </div>
                    <div>
                        <p><b>Nombre: </b>{monument.name}</p>
                    </div>
                </div>
            }
        </div>
    );
}

export default Page;