import { Album_Shorter } from "../../../types/music/Album.ts";
import { Class_Selector } from "../../../utilities/utils_CSS.ts";
import Shorter_Album from "../../Shorter_Data/Shorter_Album.tsx";

type Data = {
    albums: Album_Shorter[];
}

const Component_Albums_II = (props: Data) => {
    const albums = props.albums;
    //console.log(albums);
    
    return (
        <div class={Class_Selector(albums, true)}>
            {
                albums.map((album) => {
                    return(
                        <Shorter_Album album={album}/>
                    );
                })
            }
        </div>
    )
}

export default Component_Albums_II;
