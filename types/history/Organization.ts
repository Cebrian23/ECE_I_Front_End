import { ObjectId, OptionalId } from "mongodb";
import { Date } from "./Date.ts";
import { Person, PersonDB } from "./Person.ts";
import { EventDB } from "./Event.ts";

export type OrganizationDB = OptionalId<{
    name: string,
    logo?: string,
    creation: Date,
    dissolution?: Date,
    distinguished_members?: ObjectId[],
    involved_in?: ObjectId[],
}>

export type OrganizationGQL = {
    id: string,
    name: string,
    logo?: string,
    creation: Date,
    dissolution?: Date,
    distinguished_members?: PersonDB[],
    involved_in?: EventDB[],
}

export type Organization = {
    id: string,
    name: string,
    logo?: string,
    creation: Date,
    dissolution?: Date,
    distinguished_members?: Person[],
}