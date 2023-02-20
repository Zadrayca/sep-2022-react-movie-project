import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux";

const useMyPage = () => {
    const {page} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const nextPage = () => dispatch(moviesActions.setPage(page + 1));
    const previousPage = () => dispatch(moviesActions.setPage(page - 1));
    const firstPage = () => dispatch(moviesActions.setPage(1));

    return {nextPage, previousPage, firstPage}
};

export {
    useMyPage
}