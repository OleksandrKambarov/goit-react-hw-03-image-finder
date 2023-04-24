import PropTypes from 'prop-types';
import errorImg from 'img/error.png';
import css from './ErrorSearch.module.css';

export const ErrorSearch = ({ message }) => {
  return (
    <div className={css.errorWrapper} role="alert">
      <p>{message}</p>
      <img src={errorImg} alt="empty" />
    </div>
  );
};

ErrorSearch.propTypes = {
  message: PropTypes.string.isRequired,
};
