import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import css from './HomePage.module.css';
import {moviesActions} from "../../redux";
import {MoviesBox, PagesButton} from "../../components";
import {useLocation, useSearchParams} from "react-router-dom";

const HomePage = () => {

    const {movies, page, loading, genres} = useSelector(state => state.movies);

    const dispatch = useDispatch();

    const [query, setQuery] = useSearchParams({page: `1`});


    useEffect(() => {
        dispatch(moviesActions.getAllMovies({page}))
    }, [dispatch, page, query]);

    return (
        <div className={css.homePage}>
            <h1>Home Page, {page}</h1>
            <PagesButton/>
            <MoviesBox/>
            <PagesButton/>
        </div>
    );
};

export {
    HomePage
};