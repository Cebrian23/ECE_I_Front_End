import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { EventDB } from "../../types/history/Event.ts";

type Data = {
    event?: EventDB,
}

const handler: Handlers<Data> = {
    GET: async (req: Request, ctx: FreshContext<unknown, Data>) =>{
        const id = ctx.params.id;

        //
        
        return ctx.render({});
    }
}

const Page = (props: PageProps<Data>) => {
    return (
        <div>
        </div>
    );
}

export default Page;