import MovieList from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'servises/Api';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies('').then(setMovies);
  }, []);
  return (
    <>
      <MovieList movies={movies} />
    </>
  );
};
export default Home;
