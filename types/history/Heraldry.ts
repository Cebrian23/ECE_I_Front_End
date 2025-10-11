import { OptionalId } from "mongodb";

export type HeraldryDB = OptionalId<{
    name: string,
    image?: string,
}>

export type HeraldryGQL = {
    id: string,
    name: string,
    image: string | null,
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

export type Heraldry = {
    id: string,
    name: string,
    image?: string,
}