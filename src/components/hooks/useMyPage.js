import {useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

const useMyPage = () => {
    const {page, queryMovie, genreChoice} = useSelector(state => state.movies);
    const [, setQuery] = useSearchParams({page: '1'});

    const nextPage = () => {
        setQuery({ page: `${page + 1}`, query: `${queryMovie}`, genre:`${genreChoice.name}`});
    };

    const previousPage = () => {
        setQuery({ page: `${page - 1}`, query: `${queryMovie}`, genre:`${genreChoice.name}`});
    };

    return {
        nextPage,
        previousPage
    }
};

export {
    useMyPage
}