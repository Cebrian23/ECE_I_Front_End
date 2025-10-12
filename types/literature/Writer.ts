import { Book } from "../literature/Book.ts";

export type WriterGQL = {
    id: string,
    name: string,
    surname: string | null,
    image: string | null,
    books: Book[],
}

export type Writer = {
    id: string,
    name: string,
    surname?: string,
    image?: string,
    books: Book[],
}