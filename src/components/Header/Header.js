import {NavLink, useSearchParams} from "react-router-dom";

import css from './Header.module.css';
import {useMyPage} from "../hooks/useMyPage";
import {useQueryPage} from "../hooks/useQueryPage";
import {useDispatch} from "react-redux";
import {moviesActions} from "../../redux";

const Header = () => {

    const {firstPage} = useMyPage();
    // const {firstPageQuery} = useQueryPage();
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({page: `1`});

        const firstPageQuery = async () => {
        const newPage = 1;
        // setQuery({ page: `1` });
        // setQuery(query=> ({page:`1`}));
        setQuery(query=> ({page:+query.get('page')+1}))
        await dispatch(moviesActions.setPage(newPage));
        console.log(query.get('page'));
        // console.log(page);

    };

    return (
        <div className={css.header}>
            <NavLink to={''} onClick={firstPageQuery}>Home Page</NavLink>
            <NavLink to={'test'}>Test Page</NavLink>
            {/*<NavLink to={'users'}>Users</NavLink>*/}
        </div>
    );
};

export {
    Header
};