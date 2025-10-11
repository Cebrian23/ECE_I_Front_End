import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { url } from "../../Conection/ConecGQL.ts";
import { MithGQL } from "../../types/legend/Mith.ts";

type Data = {
    mith?: MithGQL,
}

const Mith_id = `#graphql
    query Query ($id: String!) {
        getHeraldry_id (id: $id) {
            id,
            name,
            talk_about_in {
                id
                name
                cover
                album_in {
                    id
                    name
                }
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