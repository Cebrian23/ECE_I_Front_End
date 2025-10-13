import { FreshContext, Handlers } from "$fresh/server.ts";

const Festivity_id = `#graphql
    query Query ($id: String!) {
        getFestivity_id (id: $id) {
            id
            name
            talk_about_in_song {
                id
                name
                cover
                album_in {
                    id
                    name
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
    return(
        <div>
        </div>
    );
}

export default Page;