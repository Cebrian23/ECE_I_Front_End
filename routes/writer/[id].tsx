import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { WriterDB } from "../../types/literature/Writer.ts";

type Data = {
    writer?: WriterDB,
}

export const handler: Handlers<Data> = {
    GET: async (req: Request, ctx: FreshContext<unknown, Data>) =>{
        const id = ctx.params.id;

        //
        
        return ctx.render({});
    }
}

const Page = (props: PageProps<Data>) => {
    const writer = props.data.writer;

    return (
        <div>
            {
                writer !== undefined &&
                <div>
                    <div>
                        <h1>Página de {writer.name + " " + writer.surname}</h1>
                        <img src={writer.image}/>
                    </div>
                    <div>
                        <p><b>Nombre completo: </b>{writer.name + " " + writer.surname}</p>
                        {
                            writer.books.map((book) => {
                                <div></div>
                            })
                        }
                    </div>
                </div>
            }
        </div>
    );
}

export default Page;