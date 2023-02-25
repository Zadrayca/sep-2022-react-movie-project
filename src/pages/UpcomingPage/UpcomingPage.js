import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";

import css from './UpcomingPage.module.css';
import {MoviesBox, PagesButton, useMyPage} from "../../components";
import {moviesActions} from "../../redux";

const UpcomingPage = () => {

    const {page, loading} = useSelector(state => state.movies);

    const dispatch = useDispatch();

    const [query] = useSearchParams();

    const {nextUpcomingPage} = useMyPage();

    useEffect(() => {
        dispatch(moviesActions.getTopOrUp({
            page: query.get('page'),
            path: query.get('path')
        }))
    }, [dispatch, query]);

    // console.log(query.get('page'));

    return (
        <div className={css.upcomingPage}>
            <h2>Очікувані, сторінка : №{page}</h2>
            <PagesButton nextPage={nextUpcomingPage}/>
            {loading ? <div>Loading........</div> : <MoviesBox/>}
        </div>
    );
};

export {
    UpcomingPage
};