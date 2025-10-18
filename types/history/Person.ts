import { Date } from "./Date.ts";

export type PersonGQL = {
    id: string,
    name: string,
    surname?: string,
    nickname?: string[],
    image?: string,
    birth_date?: {
        normal_date: {
            year: number,
            month: string | null,
            day: string | null,
            ac_dc: string,
        } | null,
        century_date: {
            century: string,
            ac_dc: string,
        } | null,
    },
    death_date?: {
        normal_date: {
            year: number,
            month: string | null,
            day: string | null,
            ac_dc: string,
        } | null,
        century_date: {
            century: string,
            ac_dc: string,
        } | null
    },
    country_from: string,
    historical_position: string,
    involved_in?: {
        id: string,
        name: string,
    }[],
    member_of?: {
        id: string,
        name: string,
        image?: string,
    }[],
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

export type Person = {
    id: string,
    name: string,
    surname?: string,
    nickname?: string[],
    image?: string,
    birth_date?: Date,
    death_date?: Date,
    country_from: string,
    historical_position: string,
}