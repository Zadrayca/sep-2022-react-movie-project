import {NavLink, useNavigate, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import css from './Header.module.css';
import {Search} from "../Search/Search";
import {moviesActions} from "../../redux";
import {Carousel} from "../Сarousel/Сarousel";
import {MyButton} from "../UI/MyButton/MyButton";
import {tmdbService} from "../../services";

const Header = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const {
        page,
        queryMovie,
        genreChoice,
        loading,
        movieId,
        themeSwitch,
        movies,
        homePop,
        queryYear
    } = useSelector(state => state.movies);

    const [carouselMovies, setCarouselMovies] = useState([]);

    useEffect(() => {
        tmdbService.getAllMoviesByPage({page: '1', genre: ''}).then(({data}) => setCarouselMovies(data.results))
        console.log('HEADER');
    }, []);

    const getSortMovie = () => {
        dispatch(moviesActions.setGenreChoice({id: '', name: ''}))
    };

    const switcher = () => {
        if (themeSwitch) {
            dispatch(moviesActions.setTheme(false))
        } else {
            dispatch(moviesActions.setTheme(true))
        }
    }

    console.log(themeSwitch);
    return (
        <div className={css.headerBox}>
            <div className={`${css.header2} ${themeSwitch ? css.headerWhite : ''}`}>

                <div className={css.logoBox}>
                    <img onClick={switcher} className={css.logoDark}
                         src={themeSwitch ? 'https://cdn-icons-png.flaticon.com/128/2955/2955890.png'
                             : 'https://cdn-icons-png.flaticon.com/128/1004/1004519.png'}
                         alt={'Switcher'}
                         title={'Змінити тему'}/>
                </div>

                <div className={css.logoBox}><NavLink to={`/?page=1&genre=&path=upcoming`} onClick={getSortMovie}>
                    <img className={css.logoDark}
                         src={themeSwitch ? 'https://cdn-icons-png.flaticon.com/128/1146/1146152.png'
                             : 'https://cdn-icons-png.flaticon.com/128/1146/1146203.png'}
                         alt={'Logo'}
                         title={'На Головну'}/>
                </NavLink></div>

                <div className={css.logoBox}>
                    <img className={css.logoDark}
                         src={themeSwitch ? 'https://cdn-icons-png.flaticon.com/128/552/552848.png'
                             : 'https://cdn-icons-png.flaticon.com/128/1144/1144811.png'}
                         alt={'User'}
                         title={'Доброго дня, User'}/>
                    <div>User</div>
                </div>

            </div>
            <Carousel movies={carouselMovies}/>

            <div className={`${css.header} ${themeSwitch ? css.headerWhite : ''}`}>
                <NavLink to={`/?page=1&genre=&path=upcoming`}
                         onClick={getSortMovie}><MyButton>Головна</MyButton></NavLink>
                <NavLink to={`movies?page=1&genre=`} onClick={getSortMovie}><MyButton>Усі Фільми</MyButton></NavLink>
                <NavLink to={`upcoming?page=1&path=upcoming`}><MyButton>Очікувані</MyButton></NavLink>
                <NavLink to={`topRated?page=1&path=top_rated`}><MyButton>Найкращі</MyButton></NavLink>
                <NavLink to={`search?page=1&query=${queryMovie}&year=${queryYear}`}><MyButton>Пошук</MyButton></NavLink>
                <NavLink to={`/movie?movieId=${movieId}`}><MyButton>Фільм Інфо</MyButton></NavLink>
                {/*<NavLink to={'test'}><MyButton>Test Page</MyButton></NavLink>*/}

                <Search/>

            </div>

        </div>
    );
};

export {
    Header
};