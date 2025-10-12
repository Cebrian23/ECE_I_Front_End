import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { LegendGQL } from "../../types/legend/Legend.ts";

type Data = {
    legend?: LegendGQL,
}

const Legend_id = `#graphql
    query Query ($id: String!) {
        getLegend_id (id: $id) {
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

const Legend_name = `#graphql
    query Query ($name: String!) {
        getLegend_name (name: $name) {
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