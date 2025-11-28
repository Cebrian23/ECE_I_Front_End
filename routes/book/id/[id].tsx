import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { BookGQL } from "../../../types/literature/Book.ts";
import Component_Header from "../../../components/Components_Data/General_Components/Component_Header.tsx";
import Component_Songs from "../../../components/Components_Data/General_Components/Component_Songs.tsx";
import Component_Albums_I from "../../../components/Components_Data/General_Components/Component_Albums_I.tsx";
import Book_Component from "../../../components/Components_Data/Specific_Components/Book_Component.tsx";

type Data = {
    book: BookGQL,
}

export const handler: Handlers<Data> = {
    GET: async (_req: Request, ctx: FreshContext<unknown, Data>) =>{
        const id = ctx.params.id;

        const data = await Axios.get<BookGQL>(`https://ece-i-back-end-ii.deno.dev/book/id?id=${id}`);
        
        return ctx.render({book: data.data});
    }
}

const Page = (props: PageProps<Data>) => {
    const book = props.data.book;
    const songs = book.talked_about_in_song;
    const albums = book.talked_about_in_album;

    console.log(book);

    return (
        <div>
            <Component_Header name={book.title} type="book" image={book.cover}/>
            <Book_Component title={book.title} author={book.writer} year_of_publish={book.year_of_publish}/>
            <div class="card_songs_albums">
                {
                    songs !== undefined && songs.length !== 0  &&
                    <Component_Songs songs={songs}/>
                }
            </div>
            <div class="card_songs_albums">
                {
                    albums !== undefined && albums.length !== 0  &&
                    <Component_Albums_I albums={albums}/>
                }
            </div>
        </div>
    );
}

export default Page;