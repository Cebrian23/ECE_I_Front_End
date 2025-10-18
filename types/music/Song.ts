import { Topics } from "./Topics.ts";

export type SongGQL = {
    id: string,
    name: string,
    talk_about: {
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
    cover?: string,
    official_video?: string,
    album_in: {
        id: string,
        name: string,
        year_of_publish: number,
        cover?: string,
        creator: {
            id: string,
            name: string,
        }
    }
}

export type Song = {
    id: string,
    name: string,
    talk_about: Topics,
    official_video?: string,
}

export type Song_Short = {
    id: string;
    name: string;
    cover?: string;
    album_in: {
        id: string;
        name: string;
        cover?: string;
        year_of_publish: number;
        creator: {
            id: string;
            name: string;
        };
    }
}