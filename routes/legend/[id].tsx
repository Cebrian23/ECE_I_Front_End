import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { url } from "../../Conection/ConecGQL.ts";
import { LegendGQL } from "../../types/legend/Legend.ts";

type Data = {
    legend?: LegendGQL,
}

const Legend_id = `#graphql
    query Query ($id: String!) {
        getLegend_id (id: $id) {
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

        //

        return ctx.render({});
    }
}

const Page = (props: PageProps<Data>) => {
    const legend = props.data.legend;
    return (
        <div>
            {
                legend !== undefined &&
                <div>
                    <div>
                        <h1>Página de {legend.name}</h1>
                    </div>
                    <div>
                        <p><b>Nombre: </b>{legend.name}</p>
                    </div>
                </div>
            }
        </div>
    );
}

export default Page;