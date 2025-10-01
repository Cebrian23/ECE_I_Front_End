import { ObjectId, OptionalId } from "mongodb";
import { Song } from "./Song.ts";

export type AlbumDB = OptionalId<{
    name: string,
    year_publish: number,
    cover: string,
    songs: ObjectId[],
}>

export type Album = {
    id: string,
    name: string,
    year_publish: number,
    cover: string,
    songs: Song[],
}