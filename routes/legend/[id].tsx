import { FreshContext, Handlers } from "$fresh/server.ts";

const handler: Handlers = {
    GET: async (req: Request, ctx: FreshContext<unknown>) =>{
        //
        
        return ctx.render({});
    }
}

const Page = () => {
    return (
        <>
        </>
    );
}

export default Page;