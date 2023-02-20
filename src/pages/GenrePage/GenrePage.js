import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";

import css from  './GenrePage.module.css';
import {moviesActions} from "../../redux";
import {MoviesBox, PagesButton} from "../../components";

const GenrePage = () => {

    const {genreChoice, page} = useSelector(state => state.movies);

    const dispatch = useDispatch();

    const [query] = useSearchParams();

    useEffect(() => {
        dispatch(moviesActions.getMoviesGenre({page :query.get('page'), genre: genreChoice.id}))
    }, [dispatch, page, query, genreChoice]);

    return (
        <div className={css.genrePage}>
            <h1>Genre Page,{genreChoice.name}, {page}</h1>
            <PagesButton/>
            <MoviesBox/>
            <PagesButton/>
        </div>
    );
};

export {
    GenrePage
};
