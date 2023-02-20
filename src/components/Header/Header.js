import {NavLink} from "react-router-dom";

import css from './Header.module.css';

const Header = () => {

    return (
        <div className={css.header}>
            <NavLink to={''}>Home Page</NavLink>
            <NavLink to={'genre'}>Genre Page</NavLink>
            <NavLink to={'/movie'}>Movie Page</NavLink>
            <NavLink to={'test'}>Test Page</NavLink>
        </div>
    );
};

export {
    Header
};