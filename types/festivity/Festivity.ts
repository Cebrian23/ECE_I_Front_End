import { Festivity_date } from "./Festivity_date.ts";

export type FestivityGQL = {
    id: string,
    name: string,
    date: {
        month: string,
        day: number,
    },
    talked_about_in_song?: {
        id: string,
        name: string,
        cover?: string
        album_in: {
            id: string,
            name: string,
            cover?: string,
            year_of_publish: number,
            creator: {
                id: string,
                name: string,
            }
        }
    }[],
    talked_about_in_album?: {
        id: string,
        name: string,
        cover?: string,
        year_of_publish: number,
        creator: {
            id: string,
            name: string,
        }
    }[],
}

export type Festivity = {
    id: string,
    name: string,
    date: Festivity_date,
}