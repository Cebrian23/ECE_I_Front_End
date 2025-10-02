import { ObjectId, OptionalId } from "mongodb";
import { Song, SongDB } from "./Song.ts";

export type AlbumDB = OptionalId<{
    name: string,
    year_of_publish: number,
    cover?: string,
    songs: ObjectId[],
}>

export type AlbumGQL = {
    name: string,
    year_of_publish: number,
    cover?: string,
    songs: SongDB[],
}

export type Album = {
    id: string,
    name: string,
    year_of_publish: number,
    cover?: string,
    songs: Song[],
}