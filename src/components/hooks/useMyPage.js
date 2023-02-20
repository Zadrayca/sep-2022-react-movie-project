import {useSelector} from "react-redux";
// import {moviesActions} from "../../redux";
import {useSearchParams} from "react-router-dom";

const useMyPage = () => {
    const {page} = useSelector(state => state.movies);
    const [query, setQuery] = useSearchParams({page: '1'});

    const nextPage = () => {
        // dispatch(moviesActions.setPage(page + 1))
        setQuery({ page: `${page + 1}` });
    };
    const previousPage = () => {
        // dispatch(moviesActions.setPage(page - 1))
        setQuery({ page: `${page - 1}` });
    };

    return {
        nextPage,
        previousPage,
        // firstPage
    }
};

export {
    useMyPage
}