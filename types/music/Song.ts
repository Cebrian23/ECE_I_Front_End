import { Album_Short } from "./Album.ts";
import { Topics, Topics_Short } from "./Topics.ts";

export type SongGQL = {
    id: string,
    name: string,
    talk_about?: Topics_Short,
    cover?: string,
    official_video?: string,
    official_lyric_video?: string,
    official_cd_video?: string,
    album_in: Album_Short,
}

export type Song = {
    id: string,
    name: string,
    talk_about: Topics,
    official_video?: string,
    official_lyric_video?: string,
    official_cd_video?: string,
}

export type Song_Short = {
    id: string,
    name: string,
    cover?: string,
    album_in: Album_Short,
}