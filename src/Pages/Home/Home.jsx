import { React, useEffect, useState } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { fetchTrending } from 'Helpers/ApiData';
import { Loader } from 'components/Loader/Loader';
import css from './Home.module.css';

export const Home = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTrendingFilms = () => {
      setLoading(true);

      fetchTrending()
        .then(trendingFilms => {
          setFilms(trendingFilms);
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
      <h1 className={css.pageTittle}>Trending today</h1>
      <MoviesList films={films} />
      {loading && <Loader />}
    </div>
  );
};
export default Home;
