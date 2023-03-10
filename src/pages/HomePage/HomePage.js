import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";

import css from './HomePage.module.css';
import {Carousel, Loader, MyButton, PagesButton, useMyPage} from "../../components";
import {moviesActions} from "../../redux";

const HomePage = () => {

    const {page, loading, homePop, homeTopUp} = useSelector(state => state.movies);

    const dispatch = useDispatch();

    const [query, setQuery] = useSearchParams();

    useEffect(() => {
        const page = query.get('page');
        const { getAllMovies, getTopOrUp } = moviesActions;

        dispatch(getAllMovies({
            page,
            genre: query.get('genre')
        }))
        dispatch(getTopOrUp({
            page,
            path: query.get('path')
        }))
    }, [dispatch, query]);

    // console.log(query.get('page'), query.get('path'));

    const {nextTopRatedPage, nextUpcomingPage} = useMyPage();

    const [upTopSwitch, setUpTopSwitch] = useState(true);

    const switcher = () => {
        if (upTopSwitch) {
            setQuery({path: 'top_rated'})

        } else {
            setQuery({path: 'upcoming'})
        }
        setUpTopSwitch(prev => !prev);
    };

    return (
        <div className={css.homePage}>

            <div className={css.topBox}>
                <h2>Популярні, сторінка : №{page}</h2>
                {upTopSwitch ?
                    <PagesButton nextPage={nextUpcomingPage}/>
                    : <PagesButton nextPage={nextTopRatedPage}/>
                }
            </div>
            <div className={css.carPop}>{loading ? <Loader/> : <Carousel movies={homePop}/>}</div>

            <div className={css.topBox}>
                {upTopSwitch ? <h2>Очікувані, сторінка : №{page}</h2> : <h2>Найкращі, сторінка : №{page}</h2>}
                {upTopSwitch ?
                    <PagesButton nextPage={nextUpcomingPage}/>
                    : <PagesButton nextPage={nextTopRatedPage}/>
                }
            </div>

            <div className={css.switchBox}>
                <div className={`${upTopSwitch ? css.switch : ''}`}>
                    <MyButton disabled={upTopSwitch} onClick={switcher}>Очікувані</MyButton>
                </div>
                <div className={`${upTopSwitch ? '' : css.switch}`}>
                    <MyButton disabled={!upTopSwitch} onClick={switcher}>Найкращі</MyButton>
                </div>
            </div>
            <div className={css.carPop}>{loading ? <Loader/> : <Carousel movies={homeTopUp}/>}</div>
        </div>
    );
};

export {
    HomePage
};