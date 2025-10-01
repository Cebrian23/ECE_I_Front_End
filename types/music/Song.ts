import { OptionalId, ObjectId } from "mongodb";
import { TopicsDB } from "./Topics.ts";

export type SongDB = OptionalId<{
    name: string,
    talk_about: ObjectId[],
    type: string,
    official_video: string,
}>

export type Song = {
    id: string,
    name: string,
    talk_about: TopicsDB,
    type: "Event" | "Organization" | "Person" | "Book" | "Heraldry",
    official_video: string,
}