import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { EventDB } from "../../types/history/Event.ts";

type Data = {
    event?: EventDB,
}

const handler: Handlers<Data> = {
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
                        <p>
                            <b>Fecha de nacimiento: </b>
                            {
                                event.start_date.month !== undefined && event.start_date.day !== undefined &&
                                <>{event.start_date.day + " de " + event.start_date.month + " de " + event.start_date.year}</>
                            }
                            {
                                (event.start_date.month !== undefined || event.start_date.day !== undefined) &&
                                <>{event.start_date.year}</>
                            }
                        </p>
                        {
                            event.end_date?.year !== undefined &&
                            <p>
                                <b>Fecha de fallecimiento: </b>
                                {
                                    event.end_date.month !== undefined && event.end_date.day !== undefined &&
                                    <>{event.end_date.day + " de " + event.end_date.month + " de " + event.end_date.year}</>
                                }
                                {
                                    (event.end_date.month !== undefined || event.end_date.day !== undefined) &&
                                    <>{event.end_date.year}</>
                                }
                            </p>
                        }
                    </div>
                </div>
            }
        </div>
    );
}

export default Page;