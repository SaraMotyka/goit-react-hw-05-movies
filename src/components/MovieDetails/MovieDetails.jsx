import { useEffect, useState } from 'react';
import { useParams, Link, useLocation, Outlet } from 'react-router-dom';
import { fetchMovieDetails } from 'Helpers/ApiData';
import { Loader } from 'components/Loader/Loader';
import css from './MovieDetails.module.css';
import { Navigation } from 'components/Navigation/Navigation';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fetchMovieDetailsFilms = () => {
      setLoading(true);

      fetchMovieDetails(movieId)
        .then(detailMovie => {
          setMovieInfo(detailMovie);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchMovieDetailsFilms();
  }, [movieId]);

  if (!movieInfo) {
    return;
  }

  const {
    title,
    release_date,
    popularity,
    overview,
    genres,
    poster_path,
    original_title,
  } = movieInfo || {};

  return (
    <div>
      <Navigation />
      <Link to="/" state={{ from: location }}>
        <button type="button" className={css.moviesBtn}>
          Go back
        </button>
      </Link>
      {loading && <Loader />}
      {movieInfo && (
        <div className={css.detailsImgBox}>
          <img
            className={css.detailsImg}
            width="300px"
            src={
              poster_path && `https://image.tmdb.org/t/p/w300/${poster_path}`
            }
            alt={original_title}
          />
          <div className={css.detailsBox}>
            <h1>
              {title} ({release_date.slice(0, 4)})
            </h1>
            <p>User score: {popularity}</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            <ul className={css.genresList}>
              {genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <hr />
      <div className={css.addInfo}>
        <h3 className={css.addInfoTitle}>Additional information</h3>
        <ul className={css.addInfoList}>
          <li>
            <Link className={css.addInfoLink} to="cast">
              Cast
            </Link>
          </li>
          <li>
            <Link className={css.addInfoLink} to="reviews">
              Reviews
            </Link>
          </li>
        </ul>
        <hr />
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetails;
