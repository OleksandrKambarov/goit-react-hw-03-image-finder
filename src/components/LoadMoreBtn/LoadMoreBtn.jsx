import PropTypes from 'prop-types';
import css from './LoadMoreBtn.module.css';

export const LoadMoreBtn = ({ handleLoadMore }) => {
  return (
    <button
      type="button"
      className={css.loadMoreBtn}
      onClick={() => handleLoadMore()}
    >
      Load more
    </button>
  );
};

LoadMoreBtn.propTypes = {
  handleLoadMore: PropTypes.func.isRequired,
};
