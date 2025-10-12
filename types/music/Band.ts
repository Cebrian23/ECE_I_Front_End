import { Album } from "./Album.ts";

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