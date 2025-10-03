import { OptionalId } from "mongodb";

export type BookDB = OptionalId<{
    title: string,
    cover?: string,
    year_of_publish: number,
    description?: string,
}>

export type BookGQL = {
    id: string,
    title: string,
    cover?: string,
    year_of_publish: number,
    description?: string,
}

export type Book = {
    id: string,
    title: string,
    cover?: string,
    year_of_publish: number,
    description?: string,
}