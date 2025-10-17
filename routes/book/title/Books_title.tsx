import { Handlers, FreshContext, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { BookGQL } from "../../../types/literature/Book.ts";

type Data = {
    books: BookGQL[],
}

export const handler: Handlers<Data> = {
    GET: async (req: Request, ctx: FreshContext<unknown, Data>) =>{
        const url = new URL(req.url);
        
        const title = url.searchParams.get("title")?.replace("+", " ");

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
                        <div>
                            <div>
                                <h1>{book.title}</h1>
                            </div>
                            <div>
                                {
                                    book.talked_about_in_song !== undefined && book.talked_about_in_song.length !== 0 &&
                                    <>
                                        <h3>Canciones que abordan esta leyenda</h3>
                                        <div>
                                            {
                                                book.talked_about_in_song.map((song) => {
                                                    return(
                                                        <div>
                                                            <image src={song.cover}/>
                                                            <p><a href={song.id}>{song.name}</a></p>
                                                            <i><a href={song.album_in.id}>{song.album_in.name + " (" + song.album_in.year_of_publish + ")"}</a></i>
                                                        </div>
                                                    );
                                                })
                                            }
                                        </div>
                                    </>
                                }
                            </div>
                            <div>
                                {
                                    book.talked_about_in_album !== undefined && book.talked_about_in_album.length !== 0 &&
                                    <>
                                        <h3>Albumes que abordan esta leyenda</h3>
                                        <div>
                                            {
                                                book.talked_about_in_album.map((album) => {
                                                    return(
                                                        <div>
                                                            <image src={album.cover}/>
                                                            <i><a href={album.id}>{album.name + " (" + album.year_of_publish + ")"}</a></i>
                                                        </div>
                                                    );
                                                })
                                            }
                                        </div>
                                    </>
                                }
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Page;