import { Album, Album_Shorter } from "./Album.ts";

export type BandGQL = {
    id: string,
    name: string,
    logo?: string,
    albums: Album_Shorter[],
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