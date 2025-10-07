import { OptionalId, ObjectId } from "mongodb";
import { Topics, TopicsDB } from "./Topics.ts";

export type SongDB = OptionalId<{
    name: string,
    talk_about: ObjectId[],
    official_video?: string,
}>

export type SongGQL = {
    id: string,
    name: string,
    talk_about: TopicsDB[],
    official_video?: string,
}

export type Song = {
    id: string,
    name: string,
    talk_about: Topics,
    official_video?: string,
}