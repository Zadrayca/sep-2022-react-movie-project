import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import css from './HomePage.module.css';
import {moviesActions} from "../../redux";
import {MoviesBox, PagesButton} from "../../components";

const HomePage = () => {

    const {page} = useSelector(state => state.movies);

    const dispatch = useDispatch();

    const [query] = useSearchParams();

    useEffect(() => {
        dispatch(moviesActions.getAllMovies({page :query.get('page')}))
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