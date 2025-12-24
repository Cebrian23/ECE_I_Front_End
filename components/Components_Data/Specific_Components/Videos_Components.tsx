type Data = {
    official_video?: string,
    official_lyric_video?: string,
    official_cd_video?: string,
}

const Videos_Components = (props: Data) => {
    const video = props.official_video;
    const cd_video = props.official_cd_video;
    const lyric_video = props.official_lyric_video;

    return(
        <div class="card_head">
            {
                (video === undefined || video === null || video === "") &&
                (lyric_video === undefined || lyric_video === null || lyric_video === "") &&
                (cd_video === undefined || cd_video === null || cd_video === "") &&
                <div>No se ha encontrado ningún vídeo oficial para esta canción</div>
            }
            {
                (video !== undefined && video !== null && video !== "") &&
                <div>
                    <iframe class="align-items: center;" width="560" height="315" src={video}
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowFullScreen/>
                    <br/>
                </div>
            }
            {
                (lyric_video !== undefined && lyric_video !== null && lyric_video !== "") &&
                <div>
                    <iframe width="560" height="315" src={lyric_video}
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowFullScreen/>
                    <br/>
                </div>
            }
            {
                (cd_video !== undefined && cd_video !== null && cd_video !== "") &&
                <div>
                    <iframe width="560" height="315" src={cd_video}
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowFullScreen/>
                    <br/>
                </div>
            }
        </div>
    );
}

export default Videos_Components;