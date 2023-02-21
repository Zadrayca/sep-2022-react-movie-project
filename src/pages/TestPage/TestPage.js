import css from './TestPage.module.css';
import {MoviesBox, PagesButton} from "../../components";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {moviesActions} from "../../redux";

const TestPage = () => {

    const {page, queryMovie, genreChoice} = useSelector(state => state.movies);

    const dispatch = useDispatch();

    const [query, setQuery] = useSearchParams();

    useEffect(() => {
        if (query.get('query')) {
            dispatch(moviesActions.getSearchMovieByQuery({page: query.get('page'), query: query.get('query')}))
        } else if (query.get('genre')) {
            dispatch(moviesActions.getMoviesGenre({page: query.get('page'), genre: genreChoice.id}))
        } else {
            dispatch(moviesActions.getAllMovies({page: query.get('page')}))
        }
    }, [dispatch, query]);

    console.log(query.get('query'), query.get('genre'), query.get('page'));

    return (
        <div className={css.testPage}>
            <h1>Test Page, {page}</h1>
            <PagesButton/>
            <MoviesBox/>
        </div>
    );
};

export {
    TestPage
};