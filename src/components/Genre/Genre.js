import css from './Genre.module.css';
import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux";
import {NavLink, redirect} from "react-router-dom";

const Genre = ({genre}) => {

    const dispatch = useDispatch();

    const activeGenre = ()=> {
        dispatch(moviesActions.setGenreChoice(genre))
    };

    return (
        <div className={css.genre}>
            <NavLink to={'genre'}> <button onClick={activeGenre}>{genre.name}</button></NavLink>
            {/*<button onClick={activeGenre}>{genre.name}</button>*/}

        </div>
    );
};

export {
    Genre
};
