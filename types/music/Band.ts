import { Album } from "./Album.ts";

export type BandGQL = {
    id: string,
    name: string,
    logo?: string,
    albums: {
        id: string,
        name: string,
        year_of_publish: number,
        cover?: string,
    }[],
}

export type Band = {
    id: string,
    name: string,
    logo?: string,
    albums: Album[],
}

export type Band_Short = {
    id: string,
    name: string,
    logo?: string,
}