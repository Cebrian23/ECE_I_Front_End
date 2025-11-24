import { Album_Shorter } from "../types/music/Album.ts";

type Data = {
    album: Album_Shorter
}

const Shorter_Album = (prop: Data) => {
    const album = prop.album;

    return(
        <div class="card_block">
            <br/>
            <img src={album.cover} width={250} height={350} alt={album.name}/>
            <p><i><a href={`/album/${album.id}`} class="a1">{album.name + " (" + album.year_of_publish + ")"}</a></i></p>
        </div>
    );
}

export default Shorter_Album;