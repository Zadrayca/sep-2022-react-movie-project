import {useSelector} from "react-redux";

import css from './MoviesBox.module.css';
import {MoviesCard} from "../MoviesCard/MoviesCard";

const MoviesBox = () => {

    const {movies} = useSelector(state => state.movies);

    return (
        <div className={css.moviesBox}>
            {movies.map(movie => <MoviesCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {
    MoviesBox
};
