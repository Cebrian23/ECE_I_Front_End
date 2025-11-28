import { Song_Short } from "../../../types/music/Song.ts";
import { Class_Selector } from "../../../utilities/utils_CSS.ts";
import Short_Song from "../../Shorter_Data/Short_Song.tsx";

type Data = {
    songs: Song_Short[];
}

const Component_Songs = (props: Data) => {
    const songs = props.songs;
    //console.log(songs);

    return (
        <div class={Class_Selector(songs, true)}>
            {
                songs.map((song) => {
                    return(
                        <Short_Song song={song}/>
                    );
                })
            }
        </div>
    )
}

export default Component_Songs;
