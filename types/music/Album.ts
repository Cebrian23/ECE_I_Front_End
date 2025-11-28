import { Band_Short } from "./Band.ts";
import { Song } from "./Song.ts";
import { Topics, Topics_Short } from "./Topics.ts";

export type AlbumGQL = {
    id: string,
    name: string,
    creator: {
        id: string,
        name: string,
    }
    year_of_publish: number,
    cover?: string,
    songs?: {
        id: string,
        name: string,
    }[],
    talk_about?: Topics_Short,
    conceptual_album: boolean,
}

export type Album = {
    id: string,
    name: string,
    year_of_publish: number,
    cover?: string,
    songs?: Song[],
    talk_about?: Topics,
    conceptual_album: boolean,
}

export type Album_Short = {
    id: string,
    name: string,
    cover?: string,
    year_of_publish: number,
    creator: Band_Short,
}

export type Album_Shorter = {
    id: string,
    name: string,
    cover?: string,
    year_of_publish: number,
}