import { Handlers, FreshContext, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { BookGQL } from "../../../types/literature/Book.ts";
import Short_Album from "../../../components/Short_Album.tsx";
import Short_Song from "../../../components/Short_Song.tsx";

type Data = {
    books: BookGQL[],
}

export const handler: Handlers<Data> = {
    GET: async (req: Request, ctx: FreshContext<unknown, Data>) =>{
        const url = new URL(req.url);
        
        const title = url.searchParams.get("title")?.replace("%20", " ");

        if(!title){
            return ctx.render();
        }

        const data = await Axios.get<BookGQL[]>(`https://ece-i-back-end-ii.deno.dev/books/title?title=${title}`);
        
        return ctx.render({books: data.data});
    }
}

const Page = (props: PageProps<Data>) => {
    const books = props.data.books;

    console.log(books);

    return(
        <div>
            {
                books.map((book) => {
                    return(
                        <div class="block">
                            <h1><a href={`/book/id/${book.id}`} class="a1">{book.title}</a></h1>
                            {
                                book.talked_about_in_song !== undefined && book.talked_about_in_song.length !== 0 &&
                                <>
                                    <h3>Canciones que abordan este libro</h3>
                                    <div>
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
                                book.talked_about_in_album !== undefined && book.talked_about_in_album.length !== 0 &&
                                <>
                                    <h3 class="block_name">Albumes que abordan este libro</h3>
                                    <div class="block_content">
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
                    );
                })
            }
        </div>
    );
}

export default Page;