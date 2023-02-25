import {useSelector} from "react-redux";

import css from './Badges.module.css';
import {Badge} from "../Badge/Badge";

const Badges = () => {

    const {movieInfo} = useSelector(state => state.movies);

    return (
        <div className={css.badgeBox}>
            {movieInfo && movieInfo.genres.map(genre => <Badge key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {
    Badges
};
