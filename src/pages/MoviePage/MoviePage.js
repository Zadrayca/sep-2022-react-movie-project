import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import css from './MoviePage.module.css';
import {MovieInfo} from "../../components";
import {moviesActions} from "../../redux";
import {useSearchParams} from "react-router-dom";
const MoviePage = () => {

    const {movieId} = useSelector(state => state.movies);

    const dispatch = useDispatch();

    const [query] = useSearchParams();

    useEffect(() => {
        dispatch(moviesActions.getMovieById({movieId: query.get('movieId')}))
        dispatch(moviesActions.getMovieById({movieId: query.get('movieId'), option: '/credits'}))
        dispatch(moviesActions.getMovieById({movieId: query.get('movieId'), option: '/images'}))
        console.log(query.get('movieId'));
    }, [dispatch, query]);

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
