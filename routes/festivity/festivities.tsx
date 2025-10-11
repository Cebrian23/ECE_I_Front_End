import { Handlers, FreshContext, PageProps } from "$fresh/server.ts";
import Festivities from "../../islands/Festivities.tsx";
import { FestivityDB } from "../../types/festivity/Festivity.ts";

type Data = {
    festivities?: FestivityDB[],
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
    const festivities = props.data.festivities;

    return(
        <div>
            {
                festivities === undefined &&
                <Festivities/>
            }
            {
                festivities !== undefined &&
                festivities.map((festivity) => {
                    <div>
                        <p>{festivity.name}</p>
                    </div>
                })
            }
        </div>
    );
}

export default Page;