import {useState} from "react";

import css from './PosterCard.module.css';
import {imagesUrl} from "../../configs";

const PosterCard = ({poster}) => {

    const [showPopup, setShowPopup] = useState(false);

    return (
        <div className={css.posterCard}>
            {showPopup && <div className={css.bigPic} onClick={() => setShowPopup(false)}>
                <img loading={"lazy"} src={`${imagesUrl}/w500${poster.file_path}`}
                     alt={'Movie poster'}
                />
            </div>}
            <img src={`${imagesUrl}/w342${poster.file_path}`} alt={'Movie poster'} onClick={() => setShowPopup(true)}/>
        </div>
    );
};

export {
    PosterCard
};
