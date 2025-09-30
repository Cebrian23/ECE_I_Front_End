import { album } from "./album.ts";

export type song = {
    id: string,
    name: string,
    talk_about: string,
    type: string,
    album_in: album,
}