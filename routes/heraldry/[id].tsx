import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { HeraldryDB } from "../../types/history/Heraldry.ts";

type Data = {
    heraldry?: HeraldryDB,
}

const handler: Handlers<Data> = {
    GET: async (req: Request, ctx: FreshContext<unknown, Data>) =>{
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