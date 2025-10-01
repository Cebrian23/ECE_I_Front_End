import { OptionalId } from "mongodb"
import { Date } from "./Date.ts";

export type PersonDB = OptionalId<{
    name: string,
    surname: string,
    image?: string,
    birth_date: Date,
    death_date?: Date,
}>

export type PersonGQL = {};

export type Person = {
    id: string,
    name: string,
    surname: string,
    image?: string,
    birth_date: Date,
    death_date?: Date,
}