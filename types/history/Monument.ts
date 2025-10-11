import { OptionalId } from "mongodb";
import { Date_monument } from "./Date.ts";

export type MonumentDB = OptionalId<{
    name: string,
    creation?: Date_monument,
    destruction?: Date_monument,
    still_exists: boolean,
    country_in?: string,
}>

export type Monument = {
    id: string,
    name: string,
    creation?: Date_monument,
    destruction?: Date_monument,
    still_exists: boolean,
    country_in?: string,
}