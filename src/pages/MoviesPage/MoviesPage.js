import css from './MoviesPage.module.css';
import {MoviesBox, PagesButton, useMyPage} from "../../components";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {moviesActions} from "../../redux";

const MoviesPage = () => {

    const {page, loading} = useSelector(state => state.movies);

    const dispatch = useDispatch();

    const [query,] = useSearchParams();

    useEffect(() => {
        dispatch(moviesActions.getAllMovies({
            page: query.get('page'),
            genre: query.get('genre')
        }))
        console.log('Movies');

    }, [dispatch, query]);

    console.log(query.get('genre'), query.get('page'));
    // console.log(loading);

    const {nextPage} = useMyPage();

    return (
        <div className={css.moviesPage}>
            <h2>Усі фільми, сторінка : №{page}</h2>
            <PagesButton nextPage={nextPage}/>
            {loading ? <div>Loading........</div> : <MoviesBox/>}
        </div>
    );
};

export {
    MoviesPage
};