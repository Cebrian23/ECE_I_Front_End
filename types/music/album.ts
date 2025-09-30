import { band } from "./band.ts";
import { song } from "./song.ts";

export type album = {
    id: string,
    name: string,
    year_of_publish: string,
    songs: song[],
    creator: band,
}