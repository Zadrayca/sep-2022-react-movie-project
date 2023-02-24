import {useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

const useMyPage = () => {
    const {page, queryMovie, genreChoice, sort} = useSelector(state => state.movies);
    const [, setQuery] = useSearchParams({page: '1'});

    const nextPage = (newPage) => {
        setQuery({page: `${page + newPage}`, genre: `${genreChoice.id}`});
    };

    const nextSearchPage = (newPage) => {
        setQuery({page: `${page + newPage}`, query: `${queryMovie}`, year: ``});
    };

    const nextUpcomingPage = (newPage) => {
        setQuery({page: `${page + newPage}`, path: 'upcoming'});
    };

    const nextTopRatedPage = (newPage) => {
        setQuery({page: `${page + newPage}`, path: 'top_rated'});
    };

    return {
        nextPage,
        nextSearchPage,
        nextUpcomingPage,
        nextTopRatedPage
    }
};

export {
    useMyPage
}