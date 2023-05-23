import { useEffect, useState } from 'react';
import { fetchMovieCredits } from 'servises/Api';

const Cast = () => {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getMovieCredits() {
      try {
        setIsLoading(true);
        setError(false);
        const fetchedMovieCredits = await fetchMovieCredits();
        setMovie(prevState => [...prevState, ...fetchedMovieCredits.results]);
      } catch (error) {
        console.log('error :>> ', error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getMovieCredits();
  }, []);
  return <div>Cast</div>;
};
export default Cast;
