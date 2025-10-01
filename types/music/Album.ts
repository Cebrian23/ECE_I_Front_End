import { ObjectId, OptionalId } from "mongodb";
import { Song } from "./Song.ts";

export type AlbumDB = OptionalId<{
    name: string,
    year_of_publish: number,
    cover?: string,
    songs: ObjectId[],
}>

export type AlbumGQL = {}

export type Album = {
    id: string,
    name: string,
    year_of_publish: number,
    cover?: string,
    songs: Song[],
}