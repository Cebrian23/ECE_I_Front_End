import { OptionalId } from "mongodb";

export type BookDB = OptionalId<{
    name: string,
    cover?: string,
    year_of_publish: number,
    description: string,
}>

export type BookGQL = {
    id: string,
    name: string,
    cover?: string,
    year_of_publish: number,
    description: string,
}

export type Book = {
    id: string,
    name: string,
    cover?: string,
    year_of_publish: number,
    description: string,
}