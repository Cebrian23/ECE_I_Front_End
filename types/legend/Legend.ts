import { OptionalId } from "mongodb"

export type LegendDB = OptionalId<{
    name: string,
}>

export type LegendGQL = {
    id: string,
    name: string,
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

export type Legend = {
    id: string,
    name: string,
}