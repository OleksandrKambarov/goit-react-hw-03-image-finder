import { BallTriangle } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.loaderWrapper}>
      <BallTriangle
        color="#3f51b5"
        height={300}
        width={300}
        ariaLabel="loading"
      />
    </div>
  );
};
