export type MithGQL = {
    id: string,
    name: string,
    talked_about_in_song: {
        id: string,
        name: string,
        cover: string
        album_in: {
            id: string,
            name: string,
            year_of_publish: number,
        }
    }[],
    talked_about_in_album: {
        id: string,
        name: string,
        cover: string,
        year_of_publish: number,
    }[],
}

export type Mith = {
    id: string,
    name: string,
}