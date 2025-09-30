import { album } from "./album.ts";

export type band = {
    id: string,
    name: string,
    albums: album[],
}