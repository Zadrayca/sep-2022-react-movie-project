import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";

import css from './Genres.module.css';
import {moviesActions} from "../../redux";
import {Genre} from "../Genre/Genre";

const Genres = () => {

    const {genres} = useSelector(state => state.movies);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(moviesActions.getAllGenre())
    }, [dispatch]);

    return (
        <div className={css.genres}>
            {genres && genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {
    Genres
};
