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
      <h1>Trending today</h1>
      <MovieList movies={movies} />
    </>
  );
};
export default Home;
