import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux";
import {useSearchParams} from "react-router-dom";

const useMyPage = () => {
    const {page} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    const [query, setQuery] = useSearchParams({page: `${page}`});
    const nextPage = () => {
        dispatch(moviesActions.setPage(page + 1))
        setQuery({ page: `${page + 1}` });
    };
    const previousPage = () => {
        dispatch(moviesActions.setPage(page - 1))
        setQuery({ page: `${page - 1}` });
    };
    const firstPage = () => {
        dispatch(moviesActions.setPage(1))
        setQuery({ page: `${1}` });
        console.log(query.get('page'));
    };

    return {nextPage, previousPage, firstPage}
};

export {
    useMyPage
}