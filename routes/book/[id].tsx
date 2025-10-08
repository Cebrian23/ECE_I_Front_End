import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { BookDB } from "../../types/literature/Book.ts";

type Data = {
    book?: BookDB,
}

export const handler: Handlers<Data> = {
    GET: async (req: Request, ctx: FreshContext<unknown, Data>) =>{
        const id = ctx.params.id;

        //
        
        return ctx.render({});
    }
}

const Page = (props: PageProps<Data>) => {
    const book = props.data.book;

    return (
        <div>
            {
                book !== undefined &&
                <div>
                    <div>
                        <h1>Página de {book.title}</h1>
                        <img src={book.cover}/>
                    </div>
                    <div>
                        <p><b>Título: </b>{book.title}</p>
                        <p><b>Año de publicación: </b>{book.year_of_publish}</p>
                        <p><b>Sipnosis: </b>{book.description}</p>
                    </div>
                </div>
            }
        </div>
    );
}

export default Page;