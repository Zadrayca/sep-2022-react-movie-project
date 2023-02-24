import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useSearchParams} from "react-router-dom";

import css from './Genre.module.css';
import {moviesActions} from "../../redux";
import {MyButton} from "../UI/MyButton/MyButton";

const Genre = ({genre}) => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const {page, queryMovie, genreChoice, loading, sort} = useSelector(state => state.movies);


    const [, setQuery] = useSearchParams({page: '1', genre: `${genre.id}`});

    const activeGenre = () => {
        dispatch(moviesActions.setGenreChoice(genre))
        // dispatch(moviesActions.setQuery(''))
        // setQuery({page: '1', sort: `${sort}`, genre: `${genre.id}`, query: ''});
        // setQuery({page: '1', sort: `${sort}`, genre: `${genre.id}`, query: ''});
        navigate(`movies/?page=1&genre=${genre.id}`);
    };

    return (
        <div className={css.genre}>
            <MyButton onClick={activeGenre}>{genre.name}</MyButton>
        </div>
    );
};

export {
    Genre
};
