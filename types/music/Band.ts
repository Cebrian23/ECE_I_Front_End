import { Album } from "./Album.ts";

export type BandGQL = {
    id: string,
    name: string,
    logo?: string,
    albums: {
        name: string,
        year_of_publish: number,
        cover?: string,
    },
}

export type Band = {
    id: string,
    name: string,
    logo?: string,
    albums: Album[],
}