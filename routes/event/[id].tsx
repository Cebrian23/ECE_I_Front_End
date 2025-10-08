import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { EventDB } from "../../types/history/Event.ts";

type Data = {
    event?: EventDB,
}

export const handler: Handlers<Data> = {
    GET: async (req: Request, ctx: FreshContext<unknown, Data>) =>{
        const id = ctx.params.id;

        //
        
        return ctx.render({});
    }
}

const Page = (props: PageProps<Data>) => {
    const event = props.data.event;
    
    return (
        <div>
            {
                event !== undefined &&
                <div>
                    <div>
                        <h1>Página de {event.name}</h1>
                    </div>
                    <div>
                        <p><b>Nombre: </b>{event.name}</p>
                    </div>
                </div>
            }
        </div>
    );
}

export default Page;