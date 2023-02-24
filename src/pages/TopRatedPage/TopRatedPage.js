import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";

import css from './TopRatedPage.module.css';
import {MoviesBox, PagesButton, useMyPage} from "../../components";
import {moviesActions} from "../../redux";

const TopRatedPage = () => {

    const {page, loading} = useSelector(state => state.movies);

    const dispatch = useDispatch();

    const [query] = useSearchParams();

    const {nextTopRatedPage} = useMyPage();

    useEffect(() => {
        dispatch(moviesActions.getTopOrUp({
            page: query.get('page'),
            path: query.get('path')
        }))
    }, [dispatch, query]);

    console.log(query.get('page'), query.get('path'));

    return (
        <div className={css.topRatedPage}>
            <h1>Top Rated Page: №{page}</h1>
            <PagesButton nextPage={nextTopRatedPage}/>
            {loading ? <div>Loading........</div> : <MoviesBox/>}
        </div>
    );
};

export {
    TopRatedPage
};