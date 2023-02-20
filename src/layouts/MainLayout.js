import {Outlet} from "react-router-dom";

import css from './MainLayout.module.css';
import {Genres, Header} from "../components";

const MainLayout = () => {
    return (
        <div className={css.main}>
            <Header/>
            <div className={css.mainBox}>
                <Genres/>
                <Outlet/>
            </div>
        </div>
    );
};

export {
    MainLayout
};