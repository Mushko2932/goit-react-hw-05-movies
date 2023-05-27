import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
import { useState } from 'react';

const SearchMovies = ({ query, onSubmit }) => {
  const [searchFilm, setSearchFilm] = useState(query);

  const handleSearchFilm = e => {
    setSearchFilm(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchFilm === '') {
      Notiflix.Notify.warning('Please enter text for search');
      return;
    }
    onSubmit(searchFilm);
    setSearchFilm('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="searchFilm"
        value={searchFilm}
        onChange={handleSearchFilm}
      />
      <button type="submit">Search</button>
    </form>
  );
};
export default SearchMovies;

SearchMovies.propTypes = {
  query: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
