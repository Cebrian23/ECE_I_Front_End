import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { BookGQL } from "../../../types/literature/Book.ts";

type Data = {
    book: BookGQL,
}

export const handler: Handlers<Data> = {
    GET: async (_req: Request, ctx: FreshContext<unknown, Data>) =>{
        const id = ctx.params.id;

        const data = await Axios.get<BookGQL>(`https://ece-i-back-end-ii.deno.dev/song/id?id=${id}`);
        
        return ctx.render({book: data.data});
    }
}

const Page = (props: PageProps<Data>) => {
    const book = props.data.book;

    console.log(book);

    return (
        <div>
            <h1>Página del libro "{book.title}"</h1>
        </div>
    );
}

export default Page;