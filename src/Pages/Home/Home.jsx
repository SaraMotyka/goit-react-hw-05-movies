import { React, useEffect, useState } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { fetchTrending } from 'Helpers/ApiData';
import { Loader } from 'components/Loader/Loader';
import { Navigation } from 'components/Navigation/Navigation';
import css from './Home.module.css';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTrendingFilms = () => {
      setLoading(true);

      fetchTrending()
        .then(trendingFilms => {
          setMovies(trendingFilms);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchTrendingFilms();
  }, []);

  return (
    <div>
      <Navigation />
      <h1 className={css.pageTittle}>Trending today</h1>
      <MoviesList movies={movies} />
      {loading && <Loader />}
    </div>
  );
};
