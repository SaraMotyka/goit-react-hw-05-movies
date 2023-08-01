import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './SearchForm.module.css';

const SearchForm = ({ searchMovies }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    searchMovies(query.toLowerCase());
  };

  return (
    <form className={css.formBox} onSubmit={handleSubmit}>
      <input
        className={css.inputForm}
        type="text"
        name="query"
        autoFocus
        value={query}
        onChange={handleInputChange}
      />
      <button className={css.formBtn} type="submit">
        Search
      </button>
    </form>
  );
};

SearchForm.propTypes = {
  searchMovies: PropTypes.func,
};

export default SearchForm;
