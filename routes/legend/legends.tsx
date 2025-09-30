import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Legends from "../../islands/Legends.tsx";
import { legend } from "../../types/history/legend.ts";

type Data = {
    legends?: legend[],
}

export const handler: Handlers<Data> = {
    GET: async (req: Request, ctx: FreshContext<unknown, Data>) => {
        const url = new URL(req.url);

        const name = url.searchParams.get("name");
        if(name){
            //
        }
        else{
            return ctx.render({});
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
                    </div>
                })
            }
        </div>
    );
}

export default Page;