import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { HeraldryDB } from "../../types/history/Heraldry.ts";

type Data = {
    heraldry?: HeraldryDB,
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