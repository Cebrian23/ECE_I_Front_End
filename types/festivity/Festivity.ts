import { OptionalId } from "mongodb";
import { Festivity_date } from "./Festivity_date.ts";

export type FestivityDB = OptionalId<{
    name: string,
    date: Festivity_date,
}>

export type FestivityGQL = {
    id: string,
    name: string,
    date: Festivity_date,
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

export type Festivity = {
    id: string,
    name: string,
    date: Festivity_date,
}