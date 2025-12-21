import { Handlers, FreshContext, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { BookGQL } from "../../../types/literature/Book.ts";
import Short_Album from "../../../components/Shorter_Data/Short_Album.tsx";
import Short_Song from "../../../components/Shorter_Data/Short_Song.tsx";
import { Class_Selector } from "../../../utilities/utils_CSS.ts";

type Data = {
    title: string,
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
        
        return ctx.render({books: data.data, title: title});
    }
}

const Page = (props: PageProps<Data>) => {
    const title = props.data.title;
    const books = props.data.books;

    console.log(books);

    return(
        <div>            
            {
                books.length === 0 &&
                <h1>No se ha encontrado ningún libro cuyo título sea "{title}"</h1>
            }
            {
                books.map((book) => {
                    const songs = book.talked_about_in_song;
                    const albums = book.talked_about_in_album;

                    return(
                        <div class="block">
                            <h1><a href={`/book/id/${book.id}`} class="a1">{book.title}</a></h1>
                            {
                                songs !== undefined && songs.length !== 0 &&
                                <>
                                    <h3>Canciones que abordan este libro</h3>
                                    <div class={Class_Selector(songs)}>
                                        {
                                            songs.map((song) => {
                                                return(
                                                    <Short_Song song={song}/>
                                                );
                                            })
                                        }
                                    </div>
                                </>
                            }
                            {
                                albums !== undefined && albums.length !== 0 &&
                                <>
                                    <h3 class="block_name">Albumes que abordan este libro</h3>
                                    <div class={Class_Selector(albums)}>
                                        {
                                            albums.map((album) => {
                                                return(
                                                    <Short_Album album={album}/>
                                                );
                                            })
                                        }
                                    </div>
                                </>
                            }
                            {
                                books.length > 1 &&
                                <hr width={500}/>
                            }
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Page;