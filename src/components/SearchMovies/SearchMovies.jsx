import { useState } from 'react';
import { SearchBtn, SearchForm, SearchInput } from './SearchMovies.styled';

const SearchMovies = ({ setSearchParams }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query });
  };

  const handleSearchFilm = ({ target: { value } }) => {
    setQuery(value);
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          name="searchFilm"
          autoFocus
          value={query}
          onChange={handleSearchFilm}
        />
        <SearchBtn type="submit" disabled={!query}>
          Search
        </SearchBtn>
      </SearchForm>
    </>
  );
};
export default SearchMovies;
