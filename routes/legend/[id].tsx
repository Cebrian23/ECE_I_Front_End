import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { url } from "../../Conection/ConecGQL.ts";
import { LegendGQL } from "../../types/legend/Legend.ts";

type Data = {
    legend?: LegendGQL,
}

export const handler: Handlers<Data> = {
    GET: async (_req: Request, ctx: FreshContext<unknown, Data>) =>{
        const id = ctx.params.id;

        const new_data: LegendGQL | void = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: `
                    query getLegend_id($id: String!) {
                        mith(id: $id) {
                            id,
                            name,
                            talk_about_in
                        }
                    }
                `,
                variables: { id: `${id}` }
            })
        })
        .then(response => response.json())
        .then(data => console.log(data));
        
        if(new_data){
            return ctx.render({legend: new_data});
        }
        
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