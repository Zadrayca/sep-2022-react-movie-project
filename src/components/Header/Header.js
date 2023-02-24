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

    const {page, queryMovie, genreChoice, loading, movieId, themeSwitch, movies, homePop} = useSelector(state => state.movies);

    // const [, setQuery] = useSearchParams({page: '1', sort: `popularity.desc`});

    const [carouselMovies, setCarouselMovies] = useState([]);

    useEffect(() => {
        tmdbService.getAllMoviesByPage({page: '1', genre: ''}).then(({data})=> setCarouselMovies(data.results))
        console.log('HEADER');
    }, []);

    // console.log(carouselMovies);

    const getSortMovie = () => {
        dispatch(moviesActions.setGenreChoice({id: '', name: ''}))
        // setQuery({page: '1', sort: `${sort}`});
        // setQuery({page: '1', sort: `${sort}`, genre: ``, query: ''});
        // navigate(`/?page=1&sort=${sort}&genre=&query=`);
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
                         alt={'Switcher'}/>
                </div>

                <div className={css.logoBox}><NavLink to={''}>
                    <img className={css.logoDark}
                         src={themeSwitch ? 'https://cdn-icons-png.flaticon.com/128/1146/1146152.png'
                             : 'https://cdn-icons-png.flaticon.com/128/1146/1146203.png'}
                         alt={'Logo'}/>
                </NavLink></div>

                <div className={css.logoBox}>
                    <img className={css.logoDark}
                         src={themeSwitch ? 'https://cdn-icons-png.flaticon.com/128/552/552848.png'
                             : 'https://cdn-icons-png.flaticon.com/128/1144/1144811.png'}
                         alt={'User'}/>
                </div>

            </div>
            <Carousel movies={carouselMovies}/>
            {/*<div className={`${css.header} ${themeSwitch ? css.headerWhite : ''}`}>*/}
            {/*    <NavLink to={`/?page=1&genre=&query=`} onClick={getSortMovie}>Home Page</NavLink>*/}
            {/*    <NavLink to={`movies?page=1&genre=`} onClick={getSortMovie}>All Movies</NavLink>*/}
            {/*    <NavLink to={`upcoming?page=1&path=upcoming`}>Upcoming Page</NavLink>*/}
            {/*    <NavLink to={`topRated?page=1&path=top_rated`}>Top Rated Page</NavLink>*/}
            {/*    <NavLink to={`search?page=1&query=${queryMovie}`}>Search Page</NavLink>*/}
            {/*    <NavLink to={`/movie?movieId=${movieId}`}>Movie Page</NavLink>*/}
            {/*    <NavLink to={'test'}>Test Page</NavLink>*/}
            {/*    <div>*/}
            {/*        <Search/>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div className={`${css.header} ${themeSwitch ? css.headerWhite : ''}`}>
                <NavLink to={`/?page=1&genre=&path=upcoming`} onClick={getSortMovie}><MyButton>Home Page</MyButton></NavLink>
                <NavLink to={`movies?page=1&genre=`} onClick={getSortMovie}><MyButton>All Movies</MyButton></NavLink>
                <NavLink to={`upcoming?page=1&path=upcoming`}><MyButton>Upcoming Page</MyButton></NavLink>
                <NavLink to={`topRated?page=1&path=top_rated`}><MyButton>Top Rated Page</MyButton></NavLink>
                <NavLink to={`search?page=1&query=${queryMovie}`}><MyButton>Search Page</MyButton></NavLink>
                <NavLink to={`/movie?movieId=${movieId}`}><MyButton>Movie Page</MyButton></NavLink>
                {/*<NavLink to={'test'}><MyButton>Test Page</MyButton></NavLink>*/}

                <Search/>

            </div>

        </div>
    );
};

export {
    Header
};