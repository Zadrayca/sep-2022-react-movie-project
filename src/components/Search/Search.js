import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux";
import {Link, NavLink, useNavigate, useSearchParams} from "react-router-dom";


const Search = () => {

    const navigate = useNavigate();

    const {register, handleSubmit, reset, watch} = useForm({mode: 'all'})
    const inputValue = watch('search', '');

    const dispatch = useDispatch();

    const [query, setQuery] = useSearchParams({page: '1', query: ``});

    const {page, genreChoice} = useSelector(state => state.movies);

    const search = (data) => {
        setQuery({page: '1',query: `${data.search}`})
        dispatch(moviesActions.setQuery(data.search))
        dispatch(moviesActions.setGenreChoice({id: genreChoice.id, name: ''}))
        console.log(query.get('page'));
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(search)}>
                <div>
                    <input type={"text"} placeholder={'search movie'} {...register('search')}/>
                </div>
                <div>

                    <button disabled={!inputValue} onClick={()=> navigate('')}>Search</button>
                    {/*<button disabled={!inputValue}><NavLink to={'test'}></NavLink>Search</button>*/}
                </div>
            </form>
        </div>
    );
};

export {
    Search
};
