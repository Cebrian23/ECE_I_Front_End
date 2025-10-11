import { ObjectId, OptionalId } from "mongodb";
import { Album } from "./Album.ts";

export type BandDB = OptionalId<{
    name: string,
    logo?: string,
    albums: ObjectId[],
}>

export type BandGQL = {
    id: string,
    name: string,
    logo: string | null,
    albums: {
        name: string,
        year_of_publish: number,
        cover: string | null,
    },
}

export type Band = {
    id: string,
    name: string,
    logo?: string,
    albums: Album[],
}