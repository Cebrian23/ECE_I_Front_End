import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { LegendGQL } from "../../../types/legend/Legend.ts";

type Data = {
    legend: LegendGQL,
}

export const handler: Handlers<Data> = {
    GET: async (_req: Request, ctx: FreshContext<unknown, Data>) =>{
        const id = ctx.params.id;

        const data = await Axios.get<LegendGQL>(`https://ece-i-back-end-ii.deno.dev/legend/id?id=${id}`);
        
        return ctx.render({legend: data.data});
    }
}

const Page = (props: PageProps<Data>) => {
    const legend = props.data.legend;
    
    console.log(legend);

    return (
        <div>
            <h1>Página de la leyenda "{legend.name}"</h1>
        </div>
    );
}

export default Page;