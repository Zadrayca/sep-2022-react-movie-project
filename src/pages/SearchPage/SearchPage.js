import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";

import css from './SearchPage.module.css';
import {Loader, MoviesBox, PagesButton, Search, useMyPage} from "../../components";
import {moviesActions} from "../../redux";

const SearchPage = () => {

    const {page, queryMovie, loading, queryYear} = useSelector(state => state.movies);

    const dispatch = useDispatch();

    const [query,] = useSearchParams({page: '1', query: ''});

    useEffect(() => {
        dispatch(moviesActions.getSearchMovieByQuery(
            {
                page: query.get('page'),
                query: query.get('query'),
                year: +query.get('year')
            }))
    }, [dispatch, query]);

    // console.log(query.get('query'), query.get('page'), query.get('year'));

    const {nextSearchPage} = useMyPage();

    return (
        <div className={css.searchPage}>
            <h2>Пошук "{queryMovie}", Рік: {queryYear} Сторінка: №{page}</h2>
            <Search/>
            <PagesButton nextPage={nextSearchPage}/>
            {loading ? <Loader/> : <MoviesBox/>}
        </div>
    );
};

export {
    SearchPage
};