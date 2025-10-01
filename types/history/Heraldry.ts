import { OptionalId } from "mongodb";

export type HeraldryDB = OptionalId<{
    name: string,
    image?: string,
}>

export type HeraldryGQL = {
    id: string,
    name: string,
    image?: string,
}

export type Heraldry = {
    id: string,
    name: string,
    image?: string,
}