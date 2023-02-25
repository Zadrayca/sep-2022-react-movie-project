import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import css from './Search.module.css';
import {moviesActions} from "../../redux";
import {MyButton} from "../UI/MyButton/MyButton";

const Search = () => {

    const navigate = useNavigate();

    const {register, handleSubmit, reset, watch} = useForm({mode: 'all'})
    const inputValue = watch('search', '');

    const dispatch = useDispatch();

    const search = (data) => {
        dispatch(moviesActions.setQuery(data.search));
        dispatch(moviesActions.setYear(data.year));
        dispatch(moviesActions.setGenreChoice({id: '', name: ''}));
        navigate(`/search?page=1&query=${data.search}&year=${data.year}`);
        reset();
    }

    return (
        <div className={css.searchBox}>
            <form onSubmit={handleSubmit(search)}>
                <div>
                    <input type={"text"} placeholder={'назва'} {...register('search')}/>
                </div>
                <div>
                    <input className={css.year} type={"number"} placeholder={'рік'} {...register('year')}/>
                </div>
                <div>
                    <MyButton disabled={!inputValue}>Пошук</MyButton>
                </div>
            </form>
        </div>
    );
};

export {
    Search
};
