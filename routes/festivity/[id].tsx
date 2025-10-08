import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { FestivityDB } from "../../types/festivity/Festivity.ts";

type Data = {
    festivity?: FestivityDB,
}

export const handler: Handlers<Data> = {
    GET: async (req: Request, ctx: FreshContext<unknown, Data>) =>{
        const id = ctx.params.id;

        //
        
        return ctx.render({});
    }
}

const Page = (props: PageProps<Data>) => {
    const festivity = props.data.festivity;

    return(
        <div>
            {
                festivity !== undefined &&
                <div>
                    <div>
                        <h1>Página de {festivity.name}</h1>
                    </div>
                    <div>
                        <p><b>Nombre: </b>{festivity.name}</p>
                        <p><b>Fecha: </b>{festivity.date.day + " de " + festivity.date.month}</p>
                    </div>
                </div>
            }
        </div>
    );
}

export default Page;