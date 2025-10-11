import { OptionalId, ObjectId } from "mongodb";
import { Topics } from "./Topics.ts";

export type SongDB = OptionalId<{
    name: string,
    talk_about: ObjectId[],
    official_video?: string,
}>

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
    },
    official_video: string | null,
}

export type Song = {
    id: string,
    name: string,
    talk_about: Topics,
    official_video?: string,
}