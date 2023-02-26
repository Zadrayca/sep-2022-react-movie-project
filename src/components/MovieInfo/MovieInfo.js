import {useSelector} from "react-redux";
import {useState} from "react";

import css from './MovieInfo.module.css';
import {imagesUrl} from "../../configs";
import ReactStars from "react-rating-stars-component";
import {Actors} from "../Actors/Actors";
import {Badges} from "../Badges/Badges";
import {Posters} from "../Posters/Posters";
import {VideoBox} from "../VideoBox/VideoBox";

const MovieInfo = () => {

    const {movieInfo, movieCast, movieImages, themeSwitch, movieVideo} = useSelector(state => state.movies);

    const [showPopup, setShowPopup] = useState(false);

    // console.log(movieInfo);
    // console.log(movieCast);
    // console.log(movieImages);
    // console.log(movieVideo);

    return (
        <div className={`${css.movieInfo} ${themeSwitch ? css.movieInfoWhite : ''}`}>
            {movieInfo && <div className={css.contentBox}>
                <div><h2>{movieInfo?.title}</h2></div>
                <div><h4>{movieInfo?.original_title}</h4></div>

                <div className={css.imgInfoBox}>
                    <div className={css.imgBox}>
                        <div className={css.stars}>
                            <ReactStars
                                size={18}
                                value={movieInfo.vote_average}
                                count={10}
                                edit={false}
                                color={'gray'}
                                activeColor={'yellow'}
                            />
                            <Badges/>
                        </div>
                        {showPopup && <div className={css.bigPic} onClick={() => setShowPopup(false)}>
                            <img loading={"lazy"} src={`${imagesUrl}/w500${movieInfo.poster_path}`}
                                 alt={'Movie poster'}
                            />
                        </div>}
                        {movieInfo.poster_path ?
                            <img loading={"lazy"} src={`${imagesUrl}/w342${movieInfo.poster_path}`}
                                 alt={'Movie poster'}
                                 onClick={() => setShowPopup(true)}
                            /> :
                            <img className={css.noPoster}
                                 src={`https://www.prokerala.com/movies/assets/img/no-poster-available.webp`}
                                 alt={'Movie poster'}
                                // onClick={setMovieId}
                            />}
                    </div>

                    <div className={css.infoBox}>
                        <div className={css.textBox}>
                            <div><b>Рейтинг : </b></div>
                            <div>{movieInfo?.vote_average} ({movieInfo?.vote_count})</div>
                        </div>
                        <div className={css.textBox}>
                            <div><b>Слоган : </b></div>
                            <div>"{movieInfo?.tagline}"</div>
                        </div>
                        <div className={css.textBox}>
                            <div><b>Дата виходу : </b></div>
                            <div>{movieInfo?.release_date}</div>
                        </div>
                        <div className={css.countryBox}>
                            <div><b>Країна :</b></div>
                            {movieInfo.production_countries[0] && movieInfo.production_countries.map(country =>
                                <div key={country.name}>{country.name}.</div>)}
                        </div>
                        <div className={css.countryBox}>
                            <div><b>Кінокомпанія : </b></div>
                            {movieInfo.production_companies[0] && movieInfo.production_companies.map(company =>
                                <div key={company.name}>{company.name}.</div>)}
                        </div>
                        <div className={css.textBox}>
                            <div><b>Касові збори :</b></div>
                            <div>{new Intl.NumberFormat('en-EN', {
                                style: 'currency',
                                currency: 'USD'
                            }).format(movieInfo.revenue)}</div>
                        </div>
                        <div className={css.countryBox}>
                            <div><b>Жанри : </b></div>
                            {movieInfo.genres[0] && movieInfo.genres.map(genre =>
                                <div key={genre.id}>{genre.name}.</div>)}
                        </div>
                        <div className={css.textBox}>
                            <div><b>Режиссер:</b></div>
                            {movieCast && movieCast.crew.map(cre => cre.job === 'Director' ?
                                <div key={cre.name}>{cre.name}</div> : '')}
                        </div>
                        <div className={css.countryBox}>
                            <div><b>Актори : </b></div>
                            {movieCast && movieCast.cast.map(cas =>
                                <div key={cas.order}>{cas.name}.</div>)}
                        </div>
                    </div>

                </div>
                <div className={css.overviewBox}>
                    <div><h4>Про що фільм : "{movieInfo?.title}"</h4></div>
                    <div>{movieInfo.overview}</div>
                </div>

                {movieCast?.cast[0] && <h3>Актори :</h3>}
                {movieCast?.cast[0] && <Actors/>}

                {movieVideo && <h3>Трейлери : </h3>}
                {movieVideo && <VideoBox/>}

                {movieImages?.posters[0] && <h3>Постери :</h3>}
                {movieImages?.posters[0] && <Posters/>}

            </div>}
        </div>
    );
};

export {
    MovieInfo
};
