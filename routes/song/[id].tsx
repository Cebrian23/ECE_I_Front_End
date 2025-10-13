import { FreshContext, Handlers } from "$fresh/server.ts";

const Song_id = `#graphql
    query Query ($id: String!) {
        getSong_id (id: $id) {
            id
            name
            cover
            talk_about {}
            official_video
            album_in {
                id
                name
                year_of_publish
                cover
            }
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