import { book } from "./book.ts";

export type writer = {
    id: string,
    name: string,
    books: book[],
}