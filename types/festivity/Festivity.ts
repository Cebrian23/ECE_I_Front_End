import { OptionalId } from "mongodb";
import { Festivity_date } from "./Festivity_date.ts";

export type FestivityDB = OptionalId<{
    name: string,
    date: Festivity_date,
}>

export type Festivity = {
    id: string,
    name: string,
    date: Festivity_date,
}