import ReactPlayer from "react-player/youtube";
import {useSelector} from "react-redux";

import css from './VideoBox.module.css';

const VideoBox = () => {

    const {movieInfo} = useSelector(state => state.movies);

    return (
        <div className={css.videoBox}>
            {movieInfo?.videos && movieInfo.videos.results.map(video =>
                <div key={video.id} className={css.video}>
                    <ReactPlayer
                        controls={true}
                        url={`https://www.youtube.com/watch?v=${video.key}`}
                    />
                </div>
            )}
        </div>
    );
};

export {
    VideoBox
};
