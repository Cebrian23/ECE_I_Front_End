
export type LegendGQL = {
    id: string,
    name: string,
    talked_about_in_song?: {
        id: string,
        name: string,
        cover?: string
        album_in: {
            id: string,
            name: string,
            cover?: string,
            year_of_publish: number,
            creator: {
                id: string,
                name: string,
            }
        }
    }[],
    talked_about_in_album?: {
        id: string,
        name: string,
        cover?: string,
        year_of_publish: number,
        creator: {
            id: string,
            name: string,
        }
    }[],
}

export type Legend = {
    id: string,
    name: string,
}