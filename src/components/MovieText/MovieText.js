import {useSelector} from "react-redux";

import css from "./MovieText.module.css";

const MovieText = () => {

    const {movieInfo} = useSelector(state => state.movies);

    return (
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
                {movieInfo?.production_countries[0] && movieInfo.production_countries.map(country =>
                    <div key={country.name}>{country.name}.</div>)}
            </div>
            <div className={css.countryBox}>
                <div><b>Кінокомпанія : </b></div>
                {movieInfo?.production_companies[0] && movieInfo.production_companies.map(company =>
                    <div key={company.id}>{company.name}.</div>)}
            </div>
            <div className={css.textBox}>
                <div><b>Касові збори :</b></div>
                <div>{new Intl.NumberFormat('en-EN', {
                    style: 'currency',
                    currency: 'USD'
                }).format(movieInfo?.revenue)}</div>
            </div>
            <div className={css.countryBox}>
                <div><b>Жанри : </b></div>
                {movieInfo.genres[0] && movieInfo.genres.map(genre =>
                    <div key={genre.id}>{genre.name}.</div>)}
            </div>
            <div className={css.textBox}>
                <div><b>Режиссер:</b></div>
                {movieInfo?.credits && movieInfo?.credits.crew.map(cre => cre.job === 'Director' ?
                    <div key={cre.name}>{cre.name}</div> : '')}
            </div>
            <div className={css.countryBox}>
                <div><b>Актори : </b></div>
                {movieInfo?.credits && movieInfo?.credits.cast.map(cas =>
                    <div key={cas.order}>{cas.name}.</div>)}
            </div>
        </div>
    );
};

export {
    MovieText
};
