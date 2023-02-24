import css from './MovieInfo.module.css';
import {useSelector} from "react-redux";
import {imagesUrl} from "../../configs";
const MovieInfo = () => {

    const {movieInfo, movieCast, movieImages} = useSelector(state => state.movies);

    // const movieBaseInfo = movieInfo1[0]

    console.log(movieInfo);
    console.log(movieCast);
    console.log(movieImages);

    return (
        <div className={css.movieInfo}>
            {movieInfo && <div className={css.contentBox}>
                <div><h2>{movieInfo?.title}</h2></div>
                <div><h4>{movieInfo?.original_title}</h4></div>
                <div className={css.imgInfoBox}>
                    <div className={css.imgBox}>
                        <img src={`${imagesUrl}/w185${movieInfo.poster_path}`} alt={'Movie poster'}/>
                    </div>
                    <div className={css.infoBox}>
                        <div className={css.textBox}>
                            <div>Рейтинг: </div>
                            <div>{movieInfo?.vote_average} ({movieInfo?.vote_count})</div>
                        </div>
                        <div className={css.textBox}>
                            <div>Слоган: </div>
                            <div>{movieInfo?.tagline}</div>
                        </div>
                        <div className={css.textBox}>
                            <div>Дата виходу: </div>
                            <div>{movieInfo?.release_date}</div>
                        </div>
                        <div className={css.textBox}>
                            <div>Країна: </div>
                            <div>{movieInfo.production_countries[0]?.iso_3166_1}, {movieInfo.production_countries[0]?.name}</div>
                        </div>
                        <div className={css.textBox}>
                            <div>Режиссер: </div>
                            <div></div>
                        </div>
                        <div className={css.textBox}>
                            <div></div>
                            <div></div>
                        </div>

                    </div>
                </div>

            </div>}
        </div>
    );
};

export {
    MovieInfo
};
