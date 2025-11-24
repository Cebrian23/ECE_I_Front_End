import { Song_Short } from "../types/music/Song.ts";

type Data = {
    song: Song_Short,
}

const Short_Song = (props: Data) => {
    const song = props.song;

    return(
        <div class="short_block">
            <img src={song.cover} width={250} height={350} alt={song.name + " (" + song.album_in.name + ")"}/>
            <p><a href={`/song/${song.id}`} class="a1">{song.name}</a></p>
            <i><a href={`/album/${song.album_in.id}`} class="a1">{song.album_in.name + " (" + song.album_in.year_of_publish + ")"}</a></i>
            <p><a href={`/band/${song.album_in.creator.id}`} class="a1">{song.album_in.creator.name}</a></p>
        </div>
    );
}

export default Short_Song;