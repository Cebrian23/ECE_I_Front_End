import { Album_Short } from "./Album.ts";
import { Topics } from "./Topics.ts";

export type SongGQL = {
    id: string,
    name: string,
    talk_about?: {
        events: {
            id: string,
            name: string,
        }[],
        organizations: {
            id: string,
            name: string,
        }[],
        people: {
            id: string,
            name: string,
            surname?: string,
            contry_from: string,
        }[],
        books: {
            id: string,
            title: string,
        }[],
        heraldries: {
            id: string,
            name: string,
        }[],
        legends: {
            id: string,
            name: string,
        }[],
        miths: {
            id: string,
            name: string,
        }[],
        festivities: {
            id: string,
            name: string,
        }[],
        monuments: {
            id: string,
            name: string,
        }[],
    },
    cover?: string,
    official_video?: string,
    album_in: Album_Short,
}

export type Song = {
    id: string,
    name: string,
    talk_about: Topics,
    official_video?: string,
}

export type Song_Short = {
    id: string,
    name: string,
    cover?: string,
    album_in: Album_Short,
}