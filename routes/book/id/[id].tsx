import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { BookGQL } from "../../../types/literature/Book.ts";
import Short_Song from "../../../components/Short_Song.tsx";
import Short_Album from "../../../components/Short_Album.tsx";

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

    console.log(book);

    return (
        <div>
            <div class="card_head">
                <h1>Página del libro "{book.title}"</h1>
                <img src={book.cover} width={250}/>
            </div>
            <div>
                <p><b>Título del libro: </b>{book.title}</p>
                <p><b>Autor: </b>
                    {
                        book.writer.surname === null &&
                        <a href={`/writer/${book.writer.id}`} class="a1">{book.writer.name}</a>
                    }
                    {
                        book.writer.surname !== null &&
                        <a href={`/writer/${book.writer.id}`} class="a1">{book.writer.name + " " + book.writer.surname}</a>
                    }
                </p>
                {
                    book.year_of_publish !== null &&
                    <p><b>Fecha de publicación: </b>{book.year_of_publish}</p>
                }
                {
                    book.talked_about_in_song !== undefined && book.talked_about_in_song.length !== 0  &&
                    <>
                        <p><b>Canciones que abordan este libro:</b></p>
                        <div class="group">
                            {
                                book.talked_about_in_song.map((song) => {
                                    return(
                                        <Short_Song song={song}/>
                                    );
                                })
                            }
                        </div>
                    </>
                }
                {
                    book.talked_about_in_album !== undefined && book.talked_about_in_album.length !== 0  &&
                    <>
                        <p><b>Albumes que abordan este libro:</b></p>
                        <div class="group">
                            {
                                book.talked_about_in_album.map((album) => {
                                    return(
                                        <Short_Album album={album}/>
                                    );
                                })
                            }
                        </div>
                    </>
                }
            </div>
        </div>
    );
}

export default Page;