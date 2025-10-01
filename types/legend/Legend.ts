import { OptionalId } from "mongodb"

export type LegendDB = OptionalId<{
    name: string,
}>

export type LegendGQL = {
    id: string,
    name: string,
}

export type Legend = {
    id: string,
    name: string,
}