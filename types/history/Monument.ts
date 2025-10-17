import { Date_monument } from "./Date.ts";

export type MonumentGQL = {
    id: string,
    name: string,
    creation?: {
        normal_date: {
            start: {
                year: number,
                month: string | number,
                day: number | number,
                ac_dc: string,
            } | null,
            end: {
                year: number,
                month: string | number,
                day: number | number,
                ac_dc: string,
            } | null,
        } | null,
        century_date: {
            start: {
                century: string,
                ac_dc: string,
            } | null,
            end: {
                century: string,
                ac_dc: string,
            } | null,
        } | null,
    },
    destruction?: {
        normal_date: {
            start: {
                year: number,
                month: string | number,
                day: number | number,
                ac_dc: string,
            } | null,
            end: {
                year: number,
                month: string | number,
                day: number | number,
                ac_dc: string,
            } | null,
        } | null,
        century_date: {
            start: {
                century: string,
                ac_dc: string,
            } | null,
            end: {
                century: string,
                ac_dc: string,
            } | null,
        } | null,
    },
    still_exists: string,
    country_in?: string,
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

export type Monument = {
    id: string,
    name: string,
    creation?: Date_monument,
    destruction?: Date_monument,
    still_exists: boolean,
    country_in?: string,
}