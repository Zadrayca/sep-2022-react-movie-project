import {Outlet} from "react-router-dom";

import css from './MainLayout.module.css';
import {Genres, Header} from "../components";
import {useSelector} from "react-redux";

const MainLayout = () => {

    const {themeSwitch} = useSelector(state => state.movies);

    return (
        <div className={css.main}>
            <Header/>
            <div className={`${css.mainBox} ${themeSwitch ? css.mainBoxWhite : ''}`}>
                <Genres/>
                <Outlet/>
            </div>
        </div>
    );
};

export {
    MainLayout
};