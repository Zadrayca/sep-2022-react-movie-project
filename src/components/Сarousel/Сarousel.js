
import css from './Сarousel.module.css';
import {useSelector} from "react-redux";
import {MoviesCard} from "../MoviesCard/MoviesCard";

const Carousel = ({movies}) => {

    const {themeSwitch} = useSelector(state => state.movies);

    return (
        <div className={`${css.carousel} ${themeSwitch ? css.carouselWhite : ''}`}>
            {movies.map(movie => <MoviesCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {
    Carousel
};
