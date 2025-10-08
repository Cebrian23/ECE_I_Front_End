import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Miths from "../../islands/Miths.tsx";
import { MithDB } from "../../types/legend/Mith.ts";

type Data = {
    miths?: MithDB[],
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
    const miths = props.data.miths;

    return(
        <div>
            {
                miths === undefined &&
                <Miths/>
            }
            {
                miths !== undefined &&
                miths.map((mith) => {
                    <div>
                        <p>{mith.name}</p>
                    </div>
                })
            }
        </div>
    );
}

export default Page;