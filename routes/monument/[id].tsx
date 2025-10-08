import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { MonumentDB } from "../../types/history/Monument.ts";

type Data = {
    monument?: MonumentDB,
}

export const handler: Handlers<Data> = {
    GET: async (req: Request, ctx: FreshContext<unknown, Data>) =>{
        const id = ctx.params.id;

        //
        
        return ctx.render({});
    }
}

const Page = (props: PageProps<Data>) => {
    const monument = props.data.monument;
    return (
        <div>
            {
                monument !== undefined &&
                <div>
                    <div>
                        <h1>Página de {monument.name}</h1>
                    </div>
                    <div>
                        <p><b>Nombre: </b>{monument.name}</p>
                    </div>
                </div>
            }
        </div>
    );
}

export default Page;