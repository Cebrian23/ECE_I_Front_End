import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { url } from "../../Conection/ConecGQL.ts";
import { MithGQL } from "../../types/legend/Mith.ts";

type Data = {
    mith?: MithGQL,
}

export const handler: Handlers<Data> = {
    GET: async (_req: Request, ctx: FreshContext<unknown, Data>) =>{
        const id = ctx.params.id;

        console.log(id);

        const datos = `{
            mith {
                id
                name
                talk_about_in
            }
        }`

        const new_data: MithGQL | void = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: `
                    query getLegend_id($id: String!) {
                        mith(id: $id) {
                            id,
                            name,
                            talk_about_in
                        }
                    }
                `,
                variables: { id: `${id}` }
            })
        })
        .then(response => response.json())
        .then(data => console.log(data));
        
        if(new_data){
            return ctx.render({mith: new_data});
        }

        return ctx.render({});
    }
}

const Page = (props: PageProps<Data>) => {
    const mith = props.data.mith;
    return (
        <div>
            {
                mith !== undefined &&
                <div>
                    <div>
                        <h1>Página de {mith.name}</h1>
                    </div>
                    <div>
                        <p><b>Nombre: </b>{mith.name}</p>
                    </div>
                </div>
            }
        </div>
    );
}

export default Page;