import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { LegendDB } from "../../types/legend/Legend.ts";

type Data = {
    legend?: LegendDB,
}

const handler: Handlers<Data> = {
    GET: async (req: Request, ctx: FreshContext<unknown, Data>) =>{
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