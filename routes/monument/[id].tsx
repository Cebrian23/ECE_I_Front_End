import { FreshContext, Handlers } from "$fresh/server.ts";

const Organization_id = `#graphql
    query Query ($id: String!) {
        getOrganization_id (id: $id) {
            id
            name
            creation {}
            distruction {}
            still_exists
            talk_about_in_song {
                id
                name
                cover
                album_in {
                    id
                    name
                    cover
                    year_of_publish
                }
            }
            talk_about_in_album {
                id
                name
                cover
                year_of_publish
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