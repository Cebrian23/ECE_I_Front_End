import { ObjectId, OptionalId } from "mongodb"
import { Person, PersonDB } from "./Person.ts";
import { Organization, OrganizationDB } from "./Organization.ts";
import { Date } from "./Date.ts";

export type EventDB = OptionalId<{
    name: string,
    start_date: Date,
    end_date?: Date,
    people_involved?: ObjectId[],
    organizations_involved?: ObjectId[],
}>

export type EventGQL = {
    id: string,
    name: string,
    start_date: Date,
    end_date?: Date,
    people_involved?: PersonDB[],
    organizations_involved?: OrganizationDB[],
}

export type Event = {
    id: string,
    name: string,
    start_date: Date,
    end_date?: Date,
    people_involved?: Person[],
    organizations_involved?: Organization[]
}