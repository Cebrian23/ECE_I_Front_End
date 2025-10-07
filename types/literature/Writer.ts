import { ObjectId, OptionalId } from "mongodb";
import { Book } from "../literature/Book.ts";

export type WriterDB = OptionalId<{
    name: string,
    surname?: string,
    image?: string,
    books: ObjectId[],
}>

export type WriterGQL = {
    id: string,
    name: string,
    surname?: string,
    image?: string,
    books: Book[],
}

export type Writer = {
    id: string,
    name: string,
    surname?: string,
    image?: string,
    books: Book[],
}