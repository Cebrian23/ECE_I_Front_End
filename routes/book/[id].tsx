import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { BookDB } from "../../types/literature/Book.ts";

type Data = {
    book?: BookDB,
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