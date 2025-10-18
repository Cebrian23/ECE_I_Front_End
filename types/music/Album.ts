import { Song } from "./Song.ts";
import { Topics } from "./Topics.ts";

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
    talk_about?: {
        events: {
            id: string,
            name: string,
        }[],
        organizations: {
            id: string,
            name: string,
            image: string,
        }[],
        people: {
            id: string,
            name: string,
            surname: string,
            image: string,
        }[],
        books: {
            id: string,
            title: string,
            cover: string,
        }[],
        heraldries: {
            id: string,
            name: string,
            image: string,
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
            date: {
                month: string,
                day: string,
            }
        }[],
        monuments: {
            id: string,
            name: string,
            image: string,
        }[],
    },
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
    id: string;
    name: string;
    cover?: string;
    year_of_publish: number;
    creator: {
        id: string;
        name: string;
    };
}