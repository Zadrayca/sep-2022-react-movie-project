import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";

import css from './MoviePage.module.css';
import {Loader, MovieInfo} from "../../components";
import {moviesActions} from "../../redux";

const MoviePage = () => {

    const {loading} = useSelector(state => state.movies);

    const dispatch = useDispatch();

    const [query] = useSearchParams();

    useEffect(() => {
        dispatch(moviesActions.getMovieById({movieId: query.get('movieId')}))
        dispatch(moviesActions.getMovieById({movieId: query.get('movieId'), option: '/credits'}))
        dispatch(moviesActions.getMovieById({movieId: query.get('movieId'), option: '/images'}))
        dispatch(moviesActions.getMovieById({movieId: query.get('movieId'), option: '/videos'}))
        // console.log(query.get('movieId'));
    }, [dispatch, query]);

    return (
        <div className={css.moviePage}>
            <h2>Фільм інфо</h2>
           {loading ? <Loader/> :  <MovieInfo/>}
        </div>
    );
};

export {
    MoviePage
};
