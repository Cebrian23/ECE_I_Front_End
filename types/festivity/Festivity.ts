import { Album_Short } from "../music/Album.ts";
import { Song_Short } from "../music/Song.ts";
import { Festivity_date } from "./Festivity_date.ts";

export type FestivityGQL = {
    id: string,
    name: string,
    date: {
        month: string,
        day: number,
    },
    talked_about_in_song?: Song_Short[],
    talked_about_in_album?: Album_Short[],
}

export type Festivity = {
    id: string,
    name: string,
    date: Festivity_date,
}