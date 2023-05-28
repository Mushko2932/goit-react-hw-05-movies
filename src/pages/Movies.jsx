import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovie } from 'servises/Api';
import MovieList from 'components/MovieList/MovieList';
import SearchMovies from 'components/SearchMovies/SearchMovies';

const Movies = () => {
  const [movies, setMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) return;

    async function getSearchMovie() {
      try {
        const searchMovie = await fetchSearchMovie(query);
        setMovie(searchMovie);
      } catch (error) {
        console.log('error :>> ', error);
      }
    }
    getSearchMovie();
  }, [searchParams]);

  return (
    <>
      <SearchMovies setSearchParams={setSearchParams} />
      {movies.length > 0 && <MovieList movies={movies} />}
    </>
  );
};

export default Movies;
