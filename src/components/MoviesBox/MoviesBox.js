
import css from './MoviesBox.module.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {moviesActions} from "../../redux";
import {MoviesCard} from "../MoviesCard/MoviesCard";

const MoviesBox = () => {

    const {movies, page, loading, genres} = useSelector(state => state.movies);

    const dispatch = useDispatch();



    return (
        <div className={css.moviesBox}>
            {movies.map(movie => <MoviesCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {
    MoviesBox
};
