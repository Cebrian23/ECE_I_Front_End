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
        
        const year = url.searchParams.get("year")?.replace("+", " ");
        const type = url.searchParams.get("type")?.replace("+", " ");
        const year_a = url.searchParams.get("year_a")?.replace("+", " ");
        const year_b = url.searchParams.get("year_b")?.replace("+", " ");

        if((!year && !type) || (!year_a && !year_b)){
            return ctx.render();
        }

        if(year){
            if(type!.valueOf() === "Inicio"){
                const data = await Axios.get<BookGQL[]>(`https://ece-i-back-end-ii.deno.dev/books/min_date?year=${year}`);
        
                return ctx.render({books: data.data});
            }
            else if(type!.valueOf() === "Fin"){
                const data = await Axios.get<BookGQL[]>(`https://ece-i-back-end-ii.deno.dev/books/max_date?year=${year}`);
        
                return ctx.render({books: data.data});
            }
        }
        else if(year_a && year_b){
            const data = await Axios.get<BookGQL[]>(`https://ece-i-back-end-ii.deno.dev/books/double_date?year_a=${year_a}&year_b=${year_b}`);
        
            return ctx.render({books: data.data});
        }
        
        return ctx.render();
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