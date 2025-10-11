import { ObjectId, OptionalId } from "mongodb";
import { Song } from "./Song.ts";
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
    cover: string | null,
    songs: {
        id: string,
        name: string,
    }[] | null,
    talk_about: {
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
        }[],
        books: {
            id: string,
            name: string,
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
    } | null,
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