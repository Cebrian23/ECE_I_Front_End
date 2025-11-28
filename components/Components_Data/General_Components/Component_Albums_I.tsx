import { Album_Short } from "../../../types/music/Album.ts";
import { Class_Selector } from "../../../utilities/utils_CSS.ts";
import Short_Album from "../../Shorter_Data/Short_Album.tsx";

type Data = {
    albums: Album_Short[];
}

const Component_Albums_I = (props: Data) => {
    const albums = props.albums;
    //console.log(albums);
    
    return (
        <div class={Class_Selector(albums, true)}>
            {
                albums.map((album) => {
                    return(
                        <Short_Album album={album}/>
                    );
                })
            }
        </div>
    )
}

export default Component_Albums_I;
