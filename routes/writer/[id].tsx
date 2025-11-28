import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { WriterGQL } from "../../types/literature/Writer.ts";
import Component_Header from "../../components/Components_Data/General_Components/Component_Header.tsx";
import Component_Books from "../../components/Components_Data/General_Components/Component_Books.tsx";

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
    const books = writer.books;

    console.log(writer);

    return (
        <div>
            <Component_Header name={writer.name} surname={writer.surname} type="writer"/>
            <div class="card_body">
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
            </div>
            <Component_Books books={books}/>
        </div>
    );
}

export default Page;