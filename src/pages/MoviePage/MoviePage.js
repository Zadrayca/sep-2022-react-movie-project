import css from './MoviePage.module.css';
import {MovieInfo} from "../../components";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {moviesActions} from "../../redux";
const MoviePage = () => {

    const {movieId} = useSelector(state => state.movies);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(moviesActions.getMovieById({movieId}))
    }, [dispatch, movieId]);

    return (
        <div className={css.moviePage}>
            <h1>Movie Page</h1>
            <MovieInfo/>
        </div>
    );
};

export {
    MoviePage
};
