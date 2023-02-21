import css from './MoviesCard.module.css';
import {imagesUrl} from "../../configs";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {moviesActions} from "../../redux";
import {NavLink, redirect} from "react-router-dom";

const MoviesCard = ({movie}) => {

    const dispatch = useDispatch();

    const setMovieId = ()=> {
        dispatch(moviesActions.setMovieId(movie.id))
    };

    const [showPopup, setShowPopup] = useState(false);

    // /r7ZipEd9oHHVVXTcvbx3Sd3Tukv.jpg

    return (
        <div
            className={css.moviesCard}
            onMouseEnter={() => setShowPopup(true)}
            onMouseLeave={() => setShowPopup(false)}
        >
            <NavLink to={'movie'}>
                {movie.poster_path?
                    <img src={`${imagesUrl}/w185${movie.poster_path}`}
                         alt={'Movie poster'}
                         onClick={setMovieId}
                    />:
                    <img src={`${imagesUrl}/w185/r7ZipEd9oHHVVXTcvbx3Sd3Tukv.jpg`}
                         alt={'Movie poster'}
                         onClick={setMovieId}
                    />}
            </NavLink>
            {showPopup && <div className={css.overlay}>
                <div>{movie.original_title}</div>
                <div>{movie.vote_average}</div>
                <div>{movie.overview}</div>
            </div>}
        </div>
    );
};

export {
    MoviesCard
};
