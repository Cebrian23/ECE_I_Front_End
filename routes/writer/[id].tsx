import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { WriterGQL } from "../../types/literature/Writer.ts";
import Short_Book from "../../components/Short_Book.tsx";

type Data = {
    writer: WriterGQL,
}

export const handler: Handlers<Data> = {
    GET: async (_req: Request, ctx: FreshContext<unknown, Data>) =>{
        const id = ctx.params.id;

        const data = await Axios.get<WriterGQL>(`https://ece-i-back-end-ii.deno.dev/writer/id?id=${id}`);
        
        return ctx.render({writer: data.data});
    }
}

const Page = (props: PageProps<Data>) => {
    const writer = props.data.writer;

    console.log(writer);

    return (
        <div>
            <div class="card_head">
                <h1>Página del escritor "
                    {
                        writer.surname !== null &&
                        <>{writer.name + " " + writer.surname}</>
                    }
                    {
                        writer.surname === null &&
                        <>{writer.name}</>
                    }
                "</h1>
                <img src={writer.image}/>
            </div>
            <div>
                <p>
                    <b>Nombre del escritor: </b>
                    {
                        writer.surname !== null &&
                        <>{writer.name + " " + writer.surname}</>
                    }
                    {
                        writer.surname === null &&
                        <>{writer.name}</>
                    }
                </p>
                <p><b>Libros del autor:</b></p>
                <div class="group">
                    {
                        writer.books.map((book) => {
                            return(
                                <Short_Book book={book}/>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Page;