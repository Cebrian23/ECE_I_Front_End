import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { EventGQL } from "../../../types/history/Event.ts";

type Data = {
    event: EventGQL,
}

export const handler: Handlers<Data> = {
    GET: async (_req: Request, ctx: FreshContext<unknown, Data>) =>{
        const id = ctx.params.id;

        const data = await Axios.get<EventGQL>(`https://ece-i-back-end-ii.deno.dev/event/id?id=${id}`);
        
        return ctx.render({event: data.data});
    }
}

const Page = (props: PageProps<Data>) => {
    const event = props.data.event;

    console.log(event);

    return (
        <div>
            <h1>Página del evento "{event.name}"</h1>
        </div>
    );
}

export default Page;