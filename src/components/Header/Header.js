import {NavLink} from "react-router-dom";

import css from './Header.module.css';
import {Search} from "../Search/Search";

const Header = () => {

    return (
        <div className={css.headerBox}>
            <div className={css.header2}>
                <div>
                    <button>Svicher</button>
                </div>
                <div><NavLink to={''}>LOGO</NavLink></div>
                <div>User</div>
            </div>
            <div className={css.header}>
                <NavLink to={''}>Home Page</NavLink>
                <NavLink to={'movie'}>Movie Page</NavLink>
                <NavLink to={'test'}>Test Page</NavLink>
                <div>
                    <Search/>
                </div>
            </div>
        </div>
    );
};

export {
    Header
};