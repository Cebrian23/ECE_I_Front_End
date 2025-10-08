import { OptionalId } from "mongodb";

export type MithDB = OptionalId<{
    name: string,
}>

export type MithGQL = {
    id: string,
    name: string,
    talked_about_in: {
        id: string,
        name: string,
    }
}

export type Mith = {
    id: string,
    name: string,
}