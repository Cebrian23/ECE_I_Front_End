import { OptionalId } from "mongodb"
import { Date } from "./Date.ts";

export type PersonDB = OptionalId<{
    name: string,
    surname?: string,
    nickname?: string[],
    image?: string,
    birth_date?: Date,
    death_date?: Date,
    country_from: string,
    historical_position: string,
}>

export type Person = {
    id: string,
    name: string,
    surname?: string,
    nickname?: string[],
    image?: string,
    birth_date?: Date,
    death_date?: Date,
    country_from: string,
    historical_position: string,
}