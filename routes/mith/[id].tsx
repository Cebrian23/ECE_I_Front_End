import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { MithGQL } from "../../types/legend/Mith.ts";

type Data = {
    mith?: MithGQL,
}

const Mith_id = `#graphql
    query Query ($id: String!) {
        getMith_id (id: $id) {
            id
            name
            talk_about_in_song {
                id
                name
                cover
                album_in {
                    id
                    name
                }
            }
            talk_about_in_album {
                id
                name
                cover
                year_of_publish
            }
        }
    }
`

const Mith_name = `#graphql
    query Query ($name: String!) {
        getMith_name (name: $name) {
            id
            name
            talk_about_in_song {
                id
                name
                cover
                album_in {
                    id
                    name
                }
            }
            talk_about_in_album {
                id
                name
                cover
                year_of_publish
            }
        }
    }
`

export const handler: Handlers<Data> = {
    GET: async (_req: Request, ctx: FreshContext<unknown, Data>) =>{
        const id = ctx.params.id;

        console.log(id);

        //

        return ctx.render({});
    }
}

const Page = (props: PageProps<Data>) => {
    const mith = props.data.mith;
    return (
        <div>
            {
                mith !== undefined &&
                <div>
                    <div>
                        <h1>Página de {mith.name}</h1>
                    </div>
                    <div>
                        <p><b>Nombre: </b>{mith.name}</p>
                    </div>
                </div>
            }
        </div>
    );
}

export default Page;