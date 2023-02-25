import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import css from './Genre.module.css';
import {moviesActions} from "../../redux";
import {MyButton} from "../UI/MyButton/MyButton";

const Genre = ({genre}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const activeGenre = () => {
        dispatch(moviesActions.setGenreChoice(genre))
        navigate(`/movies/?page=1&genre=${genre.id}`);
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
