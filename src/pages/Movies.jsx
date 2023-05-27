import MovieList from 'components/MovieList/MovieList';
import SearchMovies from 'components/SearchMovies/SearchMovies';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovie } from 'servises/Api';

const Movies = () => {
  const [movies, setMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const searchQuery = searchParams.get('searchQuery');
    if (!searchQuery) return;

    async function getSearchMovie() {
      try {
        const searchMovie = await fetchSearchMovie(searchQuery);
        setMovie(searchMovie);
      } catch (error) {
        console.log('error :>> ', error);
      }
    }
    getSearchMovie();
  }, [searchParams]);

  return (
    <main>
      <h2>Movies</h2>
      <SearchMovies setSearchParams={setSearchParams} />
      {movies.length > 0 && <MovieList movies={movies} />}
    </main>
  );
};

export default Movies;
