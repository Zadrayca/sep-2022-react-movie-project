import {Outlet} from "react-router-dom";

import css from './MainLayout.module.css';
// import {Header} from "../components";

const MainLayout = () => {
    return (
        <div className={css.main}>
            {/*<Header/>*/}
            <Outlet/>
        </div>
    );
};

export {
    MainLayout
};