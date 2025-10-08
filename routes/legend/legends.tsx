import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Legends from "../../islands/Legends.tsx";
import { LegendDB } from "../../types/legend/Legend.ts";

type Data = {
    legends?: LegendDB[],
}

export const handler: Handlers<Data> = {
    GET: async (req: Request, ctx: FreshContext<unknown, Data>) => {
        const url = new URL(req.url);

        const name = url.searchParams.get("name");
        if(name){
            //
        }

        return ctx.render({});
    }
}

const Page = (props: PageProps<Data>) => {
    const legends = props.data.legends;

    return(
        <div>
            {
                legends === undefined &&
                <Legends/>
            }
            {
                legends !== undefined &&
                legends.map((legend) => {
                    <div>
                        <p>{legend.name}</p>
                    </div>
                })
            }
        </div>
    );
}

export default Page;