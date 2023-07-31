import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export const Navigation = () => {
  return (
    <div className={css.navBox}>
      <NavLink to="/" className={css.navLink}>
        Home
      </NavLink>
      <NavLink to="/movies" className={css.navLink}>
        Movies
      </NavLink>
    </div>
  );
};
