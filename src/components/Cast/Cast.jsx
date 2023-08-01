import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchActors } from 'Helpers/ApiData';
import { Loader } from 'components/Loader/Loader';
import css from './Cast.module.css';

export const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const onActorsOfMovie = () => {
      setLoading(true);

      fetchActors(movieId)
        .then(actors => {
          setActors(actors);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    onActorsOfMovie();
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      <ul className={css.castBox}>
        {actors.map(({ id, profile_path, name, character }) => (
          <li className={css.castList} key={id}>
            <img
              width="200px"
              src={
                profile_path && `https://image.tmdb.org/t/p/w500${profile_path}`
              }
              alt={name}
            />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Cast;
