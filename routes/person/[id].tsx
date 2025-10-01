import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { PersonDB } from "../../types/history/Person.ts";

type Data = {
    person?: PersonDB,
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