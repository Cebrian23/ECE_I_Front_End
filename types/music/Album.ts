import { ObjectId, OptionalId } from "mongodb";
import { Song, SongDB } from "./Song.ts";
import { Topics } from "./Topics.ts";

export type AlbumDB = OptionalId<{
    name: string,
    year_of_publish: number,
    cover?: string,
    songs: ObjectId[],
    conceptual_album: boolean,
}>

export type AlbumGQL = {
    name: string,
    year_of_publish: number,
    cover?: string,
    songs: SongDB[],
    talk_about?: Topics[],
    conceptual_album: boolean,
}

export type Album = {
    id: string,
    name: string,
    year_of_publish: number,
    cover?: string,
    songs?: Song[],
    talk_about?: Topics[],
    conceptual_album: boolean,
}