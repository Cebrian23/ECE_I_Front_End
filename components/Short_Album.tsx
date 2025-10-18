import { Album_Short } from "../types/music/Album.ts";

type Data = {
    album: Album_Short,
}

const Short_Album = (props: Data) => {
    const album = props.album;
    
    return(
        <div class="short_block">
            <image src={album.cover}/>
            <i><a href={`/album/${album.id}`} class="a1">{album.name + " (" + album.year_of_publish + ")"}</a></i>
            <p><a href={`/band/${album.creator.id}`} class="a1">{album.creator.name}</a></p>
        </div>
    );
}

export default Short_Album;