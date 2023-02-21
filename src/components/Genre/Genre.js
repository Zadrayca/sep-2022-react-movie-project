import {useDispatch} from "react-redux";
import {useNavigate, useSearchParams} from "react-router-dom";

import css from './Genre.module.css';
import {moviesActions} from "../../redux";

const Genre = ({genre}) => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [,setQuery] = useSearchParams({page: '1', genre: `${genre.name}`});

    const activeGenre = () => {
        dispatch(moviesActions.setGenreChoice(genre))
        dispatch(moviesActions.setQuery(''))
        setQuery({page: '1', genre: `${genre.name}`});
        navigate(`/?page=1&genre=${genre.name}`);
    };

    return (
        <div className={css.genre}>
            <button onClick={activeGenre}>{genre.name}</button>
        </div>
    );
};

export {
    Genre
};
