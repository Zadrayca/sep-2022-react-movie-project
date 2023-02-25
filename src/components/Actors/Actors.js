import {useSelector} from "react-redux";

import css from './Actors.module.css';
import {ActorCard} from "../ActorCard/ActorCard";

const Actors = () => {

    const {movieInfo, movieCast, movieImages, themeSwitch} = useSelector(state => state.movies);

    // const z = {
    //     "adult": false,
    //     "gender": 2,
    //     "id": 65731,
    //     "known_for_department": "Acting",
    //     "name": "Sam Worthington",
    //     "original_name": "Sam Worthington",
    //     "popularity": 61.782,
    //     "profile_path": "/blKKsHlJIL9PmUQZB8f3YmMBW5Y.jpg",
    //     "cast_id": 209,
    //     "character": "Jake Sully",
    //     "credit_id": "63bedfca5258ae007dbcf660",
    //     "order": 0
    // }

    // const x = {
    //     "adult": false,
    //     "gender": 0,
    //     "id": 1805804,
    //     "known_for_department": "Costume & Make-Up",
    //     "name": "Shay Lawrence",
    //     "original_name": "Shay Lawrence",
    //     "popularity": 0.6,
    //     "profile_path": null,
    //     "credit_id": "627935d6a80236141463e7ed",
    //     "department": "Costume & Make-Up",
    //     "job": "Key Makeup Artist"
    // }

    return (
        <div className={`${css.actorsBox} ${themeSwitch ? css.actorsBoxWhite : ''}`}>
            {movieCast && movieCast.cast.map(actor => <ActorCard key={actor.credit_id} actor={actor}/>)}
        </div>
    );
};

export {
    Actors
};