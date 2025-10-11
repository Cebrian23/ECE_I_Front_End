import { ObjectId, OptionalId } from "mongodb"
import { Person } from "./Person.ts";
import { Organization } from "./Organization.ts";
import { Date } from "./Date.ts";

export type EventDB = OptionalId<{
    name: string,
    start_date?: Date,
    end_date?: Date,
    people_involved?: ObjectId[],
    organizations_involved?: ObjectId[],
}>

export type Event = {
    id: string,
    name: string,
    start_date?: Date,
    end_date?: Date,
    people_involved?: Person[],
    organizations_involved?: Organization[],
}