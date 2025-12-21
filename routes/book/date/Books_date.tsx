import { Handlers, FreshContext, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { BookGQL } from "../../../types/literature/Book.ts";
import Short_Album from "../../../components/Shorter_Data/Short_Album.tsx";
import Short_Song from "../../../components/Shorter_Data/Short_Song.tsx";
import { Class_Selector } from "../../../utilities/utils_CSS.ts";

type Data = {
    year?: string,
    limit?: string,
    type?: string,
    year_a?: string,
    year_b?: string,
    books: BookGQL[],
}

export const handler: Handlers<Data> = {
    GET: async (req: Request, ctx: FreshContext<unknown, Data>) =>{
        const url = new URL(req.url);
        
        const year = url.searchParams.get("year")?.replace("%20", " ");
        const type = url.searchParams.get("type")?.replace("%20", " ");
        const limit = url.searchParams.get("limit")?.replace("%20", " ");
        const year_a = url.searchParams.get("year_a")?.replace("%20", " ");
        const year_b = url.searchParams.get("year_b")?.replace("%20", " ");

        if((!year && !type) && (!year_a && !year_b)){
            return ctx.render();
        }

        if(year){
            if(limit === "true"){
                if(type === "Inicio"){
                    const data = await Axios.get<BookGQL[]>(`https://ece-i-back-end-ii.deno.dev/books/limit_min_date?year=${year}`);
                
                    return ctx.render({books: data.data, year: year, limit: limit, type: type});
                }
                else if(type === "Fin"){
                    const data = await Axios.get<BookGQL[]>(`https://ece-i-back-end-ii.deno.dev/books/limit_max_date?year=${year}`);
                
                    return ctx.render({books: data.data, year: year, limit: limit, type: type});
                }
            }
            else{
                const data = await Axios.get<BookGQL[]>(`https://ece-i-back-end-ii.deno.dev/books/publish_date?year=${year}`);
                
                return ctx.render({books: data.data, limit: limit, year: year});
            }
        }
        else if(year_a && year_b){
            const data = await Axios.get<BookGQL[]>(`https://ece-i-back-end-ii.deno.dev/books/double_date?year_a=${year_a}&year_b=${year_b}`);
        
            return ctx.render({books: data.data, year_a: year_a, year_b: year_b});
        }
        
        return ctx.render();
    }
}

const Page = (props: PageProps<Data>) => {
    const year = props.data.year;
    const limit = props.data.limit;
    const type = props.data.type;
    const year_a = props.data.year_a;
    const year_b = props.data.year_b;
    const books = props.data.books;

    console.log(books);

    return(
        <div>
            {
                books.length === 0 && year !== undefined && limit === "true" && type === "Inicio" &&
                <h1>No se han encontrado libros publicados a partir del año {year}</h1>
            }
            {
                books.length === 0 && year !== undefined && limit === "true" && type === "Fin" &&
                <h1>No se han encontrado libros publicados hasta el año {year}</h1>
            }
            {
                books.length === 0 && year !== undefined && (limit === undefined && limit === "false") && 
                <h1>No se han encontrado libros publicados el año {year}</h1>
            }
            {
                books.length === 0 && year_a !== undefined && year_b !== undefined &&
                <h1>No se han encontrado libros publicados el año {year_a} y el año {year_b}</h1>
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