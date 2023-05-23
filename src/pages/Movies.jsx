import { useEffect, useState } from 'react';
import { fetchMovie } from 'servises/Api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getMovie() {
      try {
        setIsLoading(true);
        setError(false);
        const fetchedMovies = await fetchMovie();
        setMovies(prevState => [...prevState, ...fetchedMovies.results]);
      } catch (error) {
        console.log('error :>> ', error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getMovie();
  }, []);
  return <div>Movies</div>;
};

export default Movies;
