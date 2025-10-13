import { Handlers, FreshContext } from "$fresh/server.ts";

export const handler: Handlers = {
    GET: async (req: Request, ctx: FreshContext<unknown>) =>{
        const url = new URL(req.url);

        //
        
        return ctx.render({});
    }
}

const Page = () => {
    return(
        <div>
        </div>
        
    );
}

export default Page;