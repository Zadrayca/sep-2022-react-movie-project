import css from './MyButton.module.css';
import {useSelector} from "react-redux";

const MyButton = ({children, ...props}) => {

    const {themeSwitch} = useSelector(state => state.movies);

    return (
        <button {...props} className={`${css.myButton} ${themeSwitch ? css.myButtonWhite : ''}`}>
            {children}
        </button>
    );
};

export {
    MyButton
};