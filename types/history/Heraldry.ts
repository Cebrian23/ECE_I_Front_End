export type HeraldryGQL = {
    id: string,
    name: string,
    image?: string,
    talked_about_in_song?: {
        id: string,
        name: string,
        cover?: string
        album_in: {
            id: string,
            name: string,
            cover?: string,
            year_of_publish: number,
        }
    }[],
    talked_about_in_album?: {
        id: string,
        name: string,
        cover?: string,
        year_of_publish: number,
    }[],
}

export type Heraldry = {
    id: string,
    name: string,
    image?: string,
}