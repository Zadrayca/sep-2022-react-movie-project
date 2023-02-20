import {useSelector} from "react-redux";

import css from './PagesButton.module.css';
import {useMyPage} from "../hooks/useMyPage";
import {useSearchParams} from "react-router-dom";
import {useQueryPage} from "../hooks/useQueryPage";

const PagesButton = () => {

    const {page} = useSelector(state => state.movies);

    const {nextPage, previousPage} = useMyPage();

    // const [query, setQuery] = useSearchParams({page: '1'});

    // const {nextPageQuery, prevPageQuery} = useQueryPage()

    // const [query1, setQuery1] = useSearchParams({page:'1'});

    // console.log(query.get('page'));

    return (
        <div className={css.buttonDiv}>
            {/*<button disabled={page === 1} onClick={prevPageQuery}>Previous page2</button>*/}
            {/*<button disabled={page === 500} onClick={nextPageQuery}>Next page2</button>*/}
            {/*<button onClick={()=> setQuery(query=> ({page:+query.get('page')-1}))}>Prev page</button>*/}
            {/*<button onClick={()=> setQuery(query=> ({page:+query.get('page')+1}))}>Next page</button>*/}

            <button disabled={page === 1} onClick={previousPage}>Previous page</button>
            <button disabled={page === 500} onClick={nextPage}>Next page</button>
        </div>
    );
};

export {
    PagesButton,
};
