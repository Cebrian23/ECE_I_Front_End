import { Album_Short } from "../music/Album.ts";
import { Song_Short } from "../music/Song.ts";
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
    still_exists: boolean,
    country_in?: string,
    talked_about_in_song?: Song_Short[],
    talked_about_in_album?: Album_Short[],
}

export type Monument = {
    id: string,
    name: string,
    creation?: Date_monument,
    destruction?: Date_monument,
    still_exists: boolean,
    country_in?: string,
}