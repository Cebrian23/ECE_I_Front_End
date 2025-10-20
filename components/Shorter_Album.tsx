import { Album_Shorter } from "../types/music/Album.ts";

type Data = {
    album: Album_Shorter
}

const Shorter_Album = (prop: Data) => {
    const album = prop.album;

    return(
        <div>
            <img src={album.cover}/>
            <p><i><a href={`/album/${album.id}`}>{album.name + " (" + album.year_of_publish + ")"}</a></i></p>
        </div>
    );
}

export default Shorter_Album;