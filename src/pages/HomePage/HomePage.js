import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import css from './HomePage.module.css';
import {moviesActions} from "../../redux";
import {MoviesBox, PagesButton} from "../../components";

const HomePage = () => {

    const {movies, page, loading, genres} = useSelector(state => state.movies);

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(moviesActions.getAllMovies({page}))
    }, [dispatch, page]);

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