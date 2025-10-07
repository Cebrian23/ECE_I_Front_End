import { OptionalId } from "mongodb";

export type MithDB = OptionalId<{
    name: string,
}>

export type Mith = {
    id: string,
    name: string,
}