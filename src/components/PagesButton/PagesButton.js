import {useSelector} from "react-redux";

import css from './PagesButton.module.css';
import {MyButton} from "../UI/MyButton/MyButton";

const PagesButton = ({nextPage}) => {

    const {page} = useSelector(state => state.movies);

    return (
        <div className={css.buttonDiv}>
            <MyButton disabled={page === 1} onClick={()=>nextPage(-1)}>Previous page</MyButton>
            {page > 2 && <MyButton onClick={()=>nextPage(-2)}>{page - 2}</MyButton>}
            {page > 1 && <MyButton onClick={()=>nextPage(-1)}>{page - 1}</MyButton>}
            <MyButton onClick={()=>nextPage(0)}>{page}</MyButton>
            <MyButton onClick={()=>nextPage(1)}>{page + 1}</MyButton>
            <MyButton onClick={()=>nextPage(2)}>{page + 2}</MyButton>
            <MyButton disabled={page === 500} onClick={()=>nextPage(1)}>Next page</MyButton>
        </div>
    );
};

export {
    PagesButton,
};
