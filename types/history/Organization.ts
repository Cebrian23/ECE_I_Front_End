import { Album_Short } from "../music/Album.ts";
import { Song_Short } from "../music/Song.ts";
import { Date } from "./Date.ts";
import { Event_Short } from "./Event.ts";
import { Person, Person_Short } from "./Person.ts";

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
    distinguished_members?: Person_Short[],
    involved_in?: Event_Short[],
    still_exists: boolean,
    talked_about_in_song?: Song_Short[],
    talked_about_in_album?: Album_Short[],
}

export type Organization = {
    id: string,
    name: string,
    logo?: string,
    creation?: Date,
    dissolution?: Date,
    distinguished_members?: Person[],
    still_exists: boolean,
}

export type Organization_Short = {
    id: string,
    name: string,
}