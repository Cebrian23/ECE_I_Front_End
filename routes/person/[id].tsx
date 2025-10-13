import { FreshContext, Handlers } from "$fresh/server.ts";

const Person_id = `#graphql
    query Query ($id: String!) {
        getPerson_id (id: $id) {
            id
            name
            surname
            nickname
            image
            birth_date {}
            death_date {}
            historical_position
            involved_in {
                id
                name
            }
            member_of {
                id
                name
                image
            }
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