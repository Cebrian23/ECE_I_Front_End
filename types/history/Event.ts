import { Person } from "./Person.ts";
import { Organization } from "./Organization.ts";
import { Date } from "./Date.ts";

export type EventGQL = {
    id: string,
    name: string,
    start_date?: {
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
    end_date?: {
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
    people_involved?: {
        id: string,
        name: string,
        surname?: string,
        image?: string,
        country_from: string,
    }[],
    organizations_involved?: {
        id: string,
        name: string,
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

export type Event = {
    id: string,
    name: string,
    start_date?: Date,
    end_date?: Date,
    people_involved?: Person[],
    organizations_involved?: Organization[],
}