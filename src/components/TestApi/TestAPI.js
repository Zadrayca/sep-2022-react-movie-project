import React, {useEffect} from 'react';

import css from './TestApi.module.css';
import {imagesUrl} from "../../configs";
import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux";

const TestAPI = () => {

    const {movies, page, loading, genres} = useSelector(state => state.movies);

    const dispatch = useDispatch();
    const nextPage = () => dispatch(moviesActions.setPage(page + 1));

    useEffect(() => {
        dispatch(moviesActions.getAllMovies({page}))
    }, [dispatch, page]);

    // useEffect(() => {
    //     dispatch(moviesActions.getAllGenre())
    // }, [dispatch]);

    // console.log(state);
    console.log(movies);
    console.log(page);
    console.log(genres);




    return (
        <div className={css.test}>
            <button onClick={nextPage}>page</button>
            {loading ?
                <div>loading.....................</div> :
                <div>
                    {movies.map(movie => <div key={movie.id}>{movie.title}</div>)}
                    {movies && movies.map(movie => <img key={movie.id} alt={'backdrop'} src={`${imagesUrl}/w500${movie.poster_path}`}/>)}
                </div>}

            {/*{genres && genres.map(movie => <div key={movie.id}>{movie.name}</div>)}*/}
            {/*{state && state.results.map(stat => <img key={stat.id} alt={'backdrop'} src={`${imagesUrl}/w500${stat.backdrop_path}`}/>)}*/}


        </div>
    );
};

export {
    TestAPI
};
