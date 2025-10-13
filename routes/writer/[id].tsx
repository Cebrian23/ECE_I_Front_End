import { FreshContext, Handlers } from "$fresh/server.ts";

const Writer_id = `#graphql
    query Query ($id: String!) {
        getWriter_id (id: $id) {
            id
            name
            surname
            image
            books {
                id
                name
                cover
                year_of_publish
            },
        }
    }
`


export const handler: Handlers = {
    GET: async (req: Request, ctx: FreshContext<unknown>) =>{
        const id = ctx.params.id;

        //
        
        return ctx.render({});
    }
}

const Page = () => {
    return (
        <div>
        </div>
    );
}

export default Page;