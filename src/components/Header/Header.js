import {NavLink} from "react-router-dom";

import css from './Header.module.css';
import {useMyPage} from "../hooks/useNextPage";

const Header = () => {

    const {firstPage} = useMyPage();

    return (
        <div className={css.header}>
            <NavLink to={''} onClick={firstPage}>Home Page</NavLink>
            <NavLink to={'test'}>Test Page</NavLink>
            {/*<NavLink to={'users'}>Users</NavLink>*/}
        </div>
    );
};

export {
    Header
};