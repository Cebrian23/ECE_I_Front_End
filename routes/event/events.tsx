import { Handlers, FreshContext, PageProps } from "$fresh/server.ts";
import Events from "../../islands/Events.tsx";
import { event } from "../../types/history/event.ts";

type Data = {
    events?: event[],
}

export const handler: Handlers<Data> = {
    GET: async (req: Request, ctx: FreshContext<unknown, Data>) => {
        const url = new URL(req.url);

        const name = url.searchParams.get("name");
        if(name){
            //
        }
        else{
            const year_a = url.searchParams.get("year_a");
            const month_a = url.searchParams.get("month_a");
            const day_a = url.searchParams.get("day_a");

            const year_b = url.searchParams.get("year_b");
            if(year_b){}
            else{}
        }

        return ctx.render({});
    }
}

const Page = (props: PageProps<Data>) => {
    const events = props.data.events;

    return(
        <div>
            {
                events === undefined &&
                <Events/>
            }
            {
                events !== undefined &&
                events.map((event) => {
                    <div>
                    </div>
                })
            }
        </div>
    );
}

export default Page;