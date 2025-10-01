import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { BandDB } from "../../types/music/Band.ts";

type Data = {
    band?: BandDB,
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