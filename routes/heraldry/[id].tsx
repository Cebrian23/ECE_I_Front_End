import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { HeraldryGQL } from "../../types/history/Heraldry.ts";

type Data = {
    heraldry?: HeraldryGQL,
}

const Heraldry_id = `#graphql
    query Query ($id: String!) {
        getHeraldry_id (id: $id) {
            id
            name
            image
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

const Heraldry_name = `#graphql
    query Query ($name: String!) {
        getHeraldry_name (name: $name) {
            id
            name
            image
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

export const handler: Handlers<Data> = {
    GET: async (_req: Request, ctx: FreshContext<unknown, Data>) =>{
        const id = ctx.params.id;

        //
        
        return ctx.render({});
    }
}

const Page = (props: PageProps<Data>) => {
    const heraldry = props.data.heraldry;

    return (
        <div>
            {
                heraldry !== undefined &&
                <div>
                    <div>
                        <h1>Página de {heraldry.name}</h1>
                        <img src={heraldry.image!}/>
                    </div>
                    <div>
                        <p><b>Nombre: </b>{heraldry.name}</p>
                    </div>
                </div>
            }
        </div>
    );
}

export default Page;