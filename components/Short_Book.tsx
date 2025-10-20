import { BookGQL } from "../types/literature/Book.ts";

type Data = {
    book: BookGQL,
}

const Short_Book = (prop: Data) => {
    const book = prop.book;
    return(
        <div class="card_block">
            <br/>
            {
                book.cover !== null &&
                <img src={book.cover} width={250} height={350}/>
            }
            <p>
                <i><a href={`/book/id/${book.id}`} class="a1">{book.title}</a></i>
                {
                    book.year_of_publish !== null &&
                    <>{" (" + book.year_of_publish + ")"}</>
                }
            </p>
        </div>
    );
}

export default Short_Book;