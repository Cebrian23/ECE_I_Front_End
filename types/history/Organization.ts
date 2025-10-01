import { ObjectId, OptionalId } from "mongodb";
import { Date } from "./Date.ts";
import { Person } from "./Person.ts";

export type OrganizationDB = OptionalId<{
    name: string,
    logo?: string,
    creation: Date,
    dissolution?: Date,
    distinguished_members?: ObjectId[],
}>

export type OrganizationGQL = {}

export type Organization = {
    id: string,
    name: string,
    logo?: string,
    creation: Date,
    dissolution?: Date,
    distinguished_members?: Person[],
}