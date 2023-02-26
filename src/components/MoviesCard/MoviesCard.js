import {useState} from "react";
import {useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";

import css from './MoviesCard.module.css';
import {imagesUrl} from "../../configs";
import {moviesActions} from "../../redux";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuestion} from '@fortawesome/free-solid-svg-icons'
import ReactStars from "react-rating-stars-component/dist/react-stars";

const MoviesCard = ({movie}) => {

    const dispatch = useDispatch();

    const setMovieId = () => {
        dispatch(moviesActions.setMovieId(movie.id))
        dispatch(moviesActions.setVideo(''))
    };

    const [showPopup, setShowPopup] = useState(false);

    return (
        <div className={css.moviesCard}>
            <div className={css.infoLink}
                 onMouseEnter={() => setShowPopup(true)}
                 onMouseLeave={() => setShowPopup(false)}
            >
                <FontAwesomeIcon className={css.icon} icon={faQuestion}/>
            </div>
            <NavLink to={`/movie?movieId=${movie.id}`}>
                <div className={css.cardBox}>
                    <div>
                        {movie.poster_path ?
                            <img loading={"lazy"} src={`${imagesUrl}/w185${movie.poster_path}`}
                                 alt={'Movie poster'}
                                 onClick={setMovieId}
                            /> :
                            <img className={css.noPoster}
                                 src={`https://www.prokerala.com/movies/assets/img/no-poster-available.webp`}
                                 alt={'Movie poster'}
                                 onClick={setMovieId}
                            />}
                    </div>
                    <div>
                        <div><b>{movie.title}</b></div>
                        <div>{movie.release_date}</div>
                    </div>
                </div>
            </NavLink>
            <div className={css.stars}>
                <ReactStars
                    size={18}
                    value={movie?.vote_average}
                    count={10}
                    edit={false}
                    color={'gray'}
                    activeColor={'yellow'}
                />
            </div>
            {showPopup && <div className={css.overlay}>
                <div><b>{movie?.title}</b></div>
                <div>{movie?.overview}</div>
            </div>}
        </div>
    );
};

export {
    MoviesCard
};
