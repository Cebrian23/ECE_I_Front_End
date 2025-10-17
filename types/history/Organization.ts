import { Date } from "./Date.ts";
import { Person } from "./Person.ts";

export type OrganizationGQL = {
    id: string,
    name: string,
    logo?: string,
    creation?: {
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
    dissolution?: {
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
    distinguished_members?: {
        id: string,
        name: string,
        surname?: string,
        image?: string,
        country_from: string,
    }[],
    involved_in?: {
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
        }
    }[],
    talked_about_in_album?: {
        id: string,
        name: string,
        cover?: string,
        year_of_publish: number,
    }[],
}

export type Organization = {
    id: string,
    name: string,
    logo?: string,
    creation?: Date,
    dissolution?: Date,
    distinguished_members?: Person[],
}