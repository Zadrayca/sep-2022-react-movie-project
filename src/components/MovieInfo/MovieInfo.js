import {useSelector} from "react-redux";
import {useState} from "react";

import css from './MovieInfo.module.css';
import {imagesUrl} from "../../configs";
import ReactStars from "react-rating-stars-component";
import {Actors} from "../Actors/Actors";
import {Badges} from "../Badges/Badges";
import {Posters} from "../Posters/Posters";
import {VideoBox} from "../VideoBox/VideoBox";
import {MovieText} from "../MovieText/MovieText";

const MovieInfo = () => {

    const {movieInfo, themeSwitch} = useSelector(state => state.movies);

    const [showPopup, setShowPopup] = useState(false);

    // console.log(movieInfo);

    return (
        <div className={`${css.movieInfo} ${themeSwitch ? css.movieInfoWhite : ''}`}>
            {movieInfo && <div className={css.contentBox}>
                <div><h2>{movieInfo?.title}</h2></div>
                <div><h4>{movieInfo?.original_title}</h4></div>

                <div className={css.imgInfoBox}>
                    <div className={css.imgBox}>
                        <div className={css.stars}>
                            <ReactStars
                                size={18}
                                value={movieInfo.vote_average}
                                count={10}
                                edit={false}
                                color={'gray'}
                                activeColor={'yellow'}
                            />
                            <Badges/>
                        </div>
                        {showPopup && <div className={css.bigPic} onClick={() => setShowPopup(false)}>
                            <img loading={"lazy"} src={`${imagesUrl}/w500${movieInfo.poster_path}`}
                                 alt={'Movie poster'}
                            />
                        </div>}
                        {movieInfo.poster_path ?
                            <img loading={"lazy"} src={`${imagesUrl}/w342${movieInfo.poster_path}`}
                                 alt={'Movie poster'}
                                 onClick={() => setShowPopup(true)}
                            /> :
                            <img className={css.noPoster}
                                 src={`https://www.prokerala.com/movies/assets/img/no-poster-available.webp`}
                                 alt={'Movie poster'}
                                // onClick={setMovieId}
                            />}
                    </div>

                    <MovieText/>

                </div>
                <div className={css.overviewBox}>
                    <div><h4>Про що фільм : "{movieInfo?.title}"</h4></div>
                    <div>{movieInfo.overview}</div>
                </div>

                {movieInfo?.credits.cast[0] && <h3>Актори :</h3>}
                {movieInfo?.credits?.cast[0] && <Actors/>}

                {movieInfo.videos && <h3>Трейлери : </h3>}
                {movieInfo.videos && <VideoBox/>}

                {movieInfo?.images.posters[0] && <h3>Постери :</h3>}
                {movieInfo?.images.posters[0] && <Posters/>}

            </div>}
        </div>
    );
};

export {
    MovieInfo
};
