import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { url } from "../../Conection/ConecGQL.ts";
import { HeraldryGQL } from "../../types/history/Heraldry.ts";

type Data = {
    heraldry?: HeraldryGQL,
}

export const handler: Handlers<Data> = {
    GET: async (_req: Request, ctx: FreshContext<unknown, Data>) =>{
        const id = ctx.params.id;

        const new_data: HeraldryGQL | void = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: `
                    query getHeraldry_name($id: String!) {
                        mith(id: $id) {
                            id,
                            name,
                            image,
                            talk_about_in,
                        }
                    }
                `,
                variables: { id: `${id}` }
            })
        })
        .then(response => response.json())
        .then(data => console.log(data));
        
        if(new_data){
            return ctx.render({heraldry: new_data});
        }
        
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
                        <img src={heraldry.image}/>
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