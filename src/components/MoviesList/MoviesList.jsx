import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './MoviesList.module.css';

export const MoviesList = ({ films }) => {
  const navigate = useNavigate();
  const handleClick = movieid => {
    navigate(`/movies/${movieid}`);
  };

  return (
    <div>
      <ul className={css.moviesList}>
        {films.map(el => (
          <li className={css.moviesItem} key={el.id}>
            <div className={css.moviesLink} onClick={() => handleClick(el.id)}>
              {el.title}
            </div>
          </li>

          // <li key={el.id} className={css.moviesItem}>
          //   <Link
          //     className={css.moviesLink}
          //     to={`/movies/${el.id}`}
          //     state={{ from: location }}
          //   >
          //     {el.title}
          //   </Link>
          // </li>
        ))}
      </ul>
    </div>
  );
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.number,
    })
  ),
};

export default MoviesList;
