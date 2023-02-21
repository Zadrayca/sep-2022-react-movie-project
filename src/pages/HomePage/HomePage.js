import css from './HomePage.module.css';
import {MoviesBox, PagesButton} from "../../components";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {moviesActions} from "../../redux";

const HomePage = () => {

    const {page, queryMovie, genreChoice, loading, sort} = useSelector(state => state.movies);

    const dispatch = useDispatch();

    const [query, setQuery] = useSearchParams();

    useEffect(() => {
        if (query.get('query')) {
            dispatch(moviesActions.getSearchMovieByQuery({page: query.get('page'), query: query.get('query')}))
        } else if (query.get('genre')) {
            dispatch(moviesActions.getMoviesGenre({page: query.get('page'), genre: genreChoice.id}))
        } else {
            dispatch(moviesActions.getAllMovies({page: query.get('page'), sort: sort}))
        }
    }, [dispatch, query]);

    console.log(query.get('query'), query.get('genre'), query.get('page'));
    console.log(loading);

    return (
        <div className={css.homePage}>
            <h1>Home Page, {page}</h1>
            <PagesButton/>
            {loading ? <div>Loading........</div> : <MoviesBox/>}
        </div>
    );
};

export {
    HomePage
};