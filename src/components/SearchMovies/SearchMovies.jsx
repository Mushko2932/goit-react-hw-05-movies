import { useState } from 'react';

const SearchMovies = ({ setSearchParams }) => {
  const [query, setQuery] = useState('');

  const handleSearchFilm = ({ target: { value } }) => {
    setQuery(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="searchFilm"
        autoFocus
        value={query}
        onChange={handleSearchFilm}
      />
      <button type="submit" disabled={!query}>
        Search
      </button>
    </form>
  );
};
export default SearchMovies;
