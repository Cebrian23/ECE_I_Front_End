import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Legends from "../../islands/Legends.tsx";
import { MonumentDB } from "../../types/history/Monument.ts";

type Data = {
    monuments?: MonumentDB[],
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
    const monuments = props.data.monuments;

    return(
        <div>
            {
                monuments === undefined &&
                <></>
            }
            {
                monuments !== undefined &&
                monuments.map((monument) => {
                    <div>
                        <p>{monument.name}</p>
                    </div>
                })
            }
        </div>
    );
}

export default Page;