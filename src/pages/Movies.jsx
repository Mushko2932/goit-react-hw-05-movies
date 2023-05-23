import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { fetchSearchMovie } from 'servises/Api';

const Movies = () => {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getSearchMovie() {
      try {
        setIsLoading(true);
        setError(false);
        const fetchedMovie = await fetchSearchMovie();
        setMovie(prevState => [...prevState, ...fetchedMovie.results]);
      } catch (error) {
        console.log('error :>> ', error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getSearchMovie();
  }, []);
  return (
    <>
      {isLoading && <Loader />}
      {error && <p>{error.message}</p>}
      <div>Movies</div>
    </>
  );
};

export default Movies;
