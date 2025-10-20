import { Album_Short } from "../music/Album.ts";
import { Song_Short } from "../music/Song.ts";
import { Writer_Short } from "./Writer.ts";

export type BookGQL = {
    id: string,
    title: string,
    cover?: string,
    year_of_publish?: number,
    description?: string,
    writer: Writer_Short,
    talked_about_in_song?: Song_Short[],
    talked_about_in_album?: Album_Short[],
}

export type Book = {
    id: string,
    title: string,
    cover?: string,
    year_of_publish?: number,
    description?: string,
}