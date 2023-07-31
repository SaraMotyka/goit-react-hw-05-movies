import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './MoviesList.module.css';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <div>
      <ul className={css.moviesUl}>
        {movies.map(el => (
          <li key={el.id} className={css.moviesItem}>
            <Link
              className={css.moviesLink}
              to={`/movies/${el.id}`}
              state={{ from: location }}
            >
              {el.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.number,
    })
  ),
};

export default MoviesList;
