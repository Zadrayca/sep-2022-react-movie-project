import {useSelector} from "react-redux";

import css from './PagesButton.module.css';
import {useMyPage} from "../hooks/useNextPage";

const PagesButton = () => {

    const {page} = useSelector(state => state.movies);

    const {nextPage, previousPage} = useMyPage();

    return (
        <div className={css.buttonDiv}>
            <button disabled={page === 1} onClick={previousPage}>Previous page</button>
            <button disabled={page === 500} onClick={nextPage}>Next page</button>
        </div>
    );
};

export {
    PagesButton,
};
