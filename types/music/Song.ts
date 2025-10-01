import { OptionalId, ObjectId } from "mongodb";
import { Topics } from "./Topics.ts";

export type SongDB = OptionalId<{
    name: string,
    talk_about: ObjectId[],
    type: string,
    official_video?: string,
}>

export type SongGQL = {}

export type Song = {
    id: string,
    name: string,
    talk_about: Topics,
    type: "Event" | "Organization" | "Person" | "Book" | "Heraldry",
    official_video?: string,
}