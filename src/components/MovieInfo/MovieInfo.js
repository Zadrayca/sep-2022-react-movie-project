import css from './MovieInfo.module.css';
import {useSelector} from "react-redux";
import {imagesUrl} from "../../configs";
const MovieInfo = () => {

    const {movieInfo} = useSelector(state => state.movies);

    console.log(movieInfo);

    return (
        <div className={css.movieInfo}>
            {movieInfo && <div>
                <div>{movieInfo.title}</div>
                <div><img src={`${imagesUrl}/w500${movieInfo.poster_path}`}
                          alt={'Movie poster'}
                /></div>
            </div>}
        </div>
    );
};

export {
    MovieInfo
};
