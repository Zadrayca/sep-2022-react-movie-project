import css from './MoviesCard.module.css';
import {imagesUrl} from "../../configs";

const MoviesCard = ({movie}) => {

    return (
        <div className={css.moviesCard}>
            <img src={`${imagesUrl}/w185${movie.poster_path}`} alt={'Movie poster'}/>

        </div>
    );
};

export {
    MoviesCard
};
