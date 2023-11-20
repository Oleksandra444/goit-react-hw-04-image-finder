import css from '../styles.module.css';

export const ButtonLoadMore = ({ onClick }) => {
    return (
        <button type='button' className={css.button } onClick={onClick}>Load more
        </button>
    )
 };
