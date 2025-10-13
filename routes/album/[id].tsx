import { FreshContext, Handlers } from "$fresh/server.ts";

const Album_id = `#graphql
    query Query ($id: String!) {
        getAlbum_id (id: $id) {
            id
            name
            cover
            year_of_publish
            creator{
                id
                name
            }
            songs{
                id
                name
            }
            talk_about{}
            conceptual_album
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