import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import css from './Search.module.css';
import {moviesActions} from "../../redux";
import {MyButton} from "../UI/MyButton/MyButton";


const Search = () => {

    const navigate = useNavigate();

    const {register, handleSubmit, reset, watch} = useForm({mode: 'all'})
    const inputValue = watch('search', '');

    const dispatch = useDispatch();

    const {page, genreChoice} = useSelector(state => state.movies);

    const search = (data) => {
        dispatch(moviesActions.setQuery(data.search))
        dispatch(moviesActions.setGenreChoice({id: '', name: ''}))
        navigate(`search?page=1&query=${data.search}&year=${''}`)
        reset()
    }

    return (
        <div className={css.searchBox}>
            <form onSubmit={handleSubmit(search)}>
                <div>
                    <input type={"text"} placeholder={'search movie'} {...register('search')}/>
                </div>
                <div>
                    <MyButton disabled={!inputValue}>Search</MyButton>
                </div>
            </form>
        </div>
    );
};

export {
    Search
};
