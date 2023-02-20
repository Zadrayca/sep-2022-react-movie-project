import css from './Genre.module.css';

const Genre = ({genre}) => {

    return (
        <div className={css.genre}>
            {genre.name}
        </div>
    );
};

export {
    Genre
};
