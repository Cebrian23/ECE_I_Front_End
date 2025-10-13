import { FreshContext, Handlers } from "$fresh/server.ts";

const Book_id = `#graphql
    query Query ($id: String!) {
        getBook_id (id: $id) {
            id
            title
            year_of_publish
            cover
            writer
            description
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