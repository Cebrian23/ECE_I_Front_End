import { OptionalId } from "mongodb";

export type BookDB = OptionalId<{
    title: string,
    cover?: string,
    year_of_publish?: number,
    description?: string,
}>

export type BookGQL = {
    id: string,
    title: string,
    cover: string | null,
    year_of_publish: number | null,
    description: string | null,
    talked_about_in: {
        id: string,
        name: string,
        cover: string
        album_in: {
            id: string,
            name: string,
        }
    }[]
}

export type Book = {
    id: string,
    title: string,
    cover?: string,
    year_of_publish?: number,
    description?: string,
}