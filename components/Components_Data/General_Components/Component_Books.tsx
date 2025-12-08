import { BookGQL } from "../../../types/literature/Book.ts";
import { Class_Selector } from "../../../utilities/utils_CSS.ts";
import Short_Book from "../../Shorter_Data/Short_Book.tsx";

type Data = {
    books: BookGQL[];
}

const Component_Books = (props: Data) => {
    const books = props.books;
    //console.log(books);

    return (
        <div class="card_head">
            <div class={Class_Selector(books, true)}>
                {
                    books.map((book) => {
                        return(
                            <Short_Book book={book}/>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default Component_Books;