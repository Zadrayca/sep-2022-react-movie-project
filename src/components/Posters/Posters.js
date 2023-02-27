import {useSelector} from "react-redux";

import css from './Posters.module.css';
import {PosterCard} from "../PoserCard/PosterCard";

const Posters = () => {

    const {movieInfo, themeSwitch} = useSelector(state => state.movies);

    return (
        <div className={`${css.postersBox} ${themeSwitch ? css.postersBoxWhite : ''}`}>
            {movieInfo?.images?.posters[0] && movieInfo?.images?.posters.map(poster => <PosterCard
                key={poster.file_path} poster={poster}/>)}
        </div>
    );
};

export {
    Posters
};
