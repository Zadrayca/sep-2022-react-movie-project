import {useSelector} from "react-redux";

import css from './Actors.module.css';
import {ActorCard} from "../ActorCard/ActorCard";

const Actors = () => {

    const {movieInfo, themeSwitch} = useSelector(state => state.movies);

    return (
        <div className={`${css.actorsBox} ${themeSwitch ? css.actorsBoxWhite : ''}`}>
            {movieInfo?.credits && movieInfo?.credits?.cast.map(actor => <ActorCard key={actor.credit_id}
                                                                                    actor={actor}/>)}
        </div>
    );
};

export {
    Actors
};
