import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'servises/Api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const searchMovie = fetchMovieDetails(movieId);
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getMovieDetails() {
      try {
        setIsLoading(true);
        setError(false);
        const fetchedMovieDetails = await fetchMovieDetails();
        setMovie(prevState => [...prevState, ...fetchedMovieDetails.results]);
      } catch (error) {
        console.log('error :>> ', error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getMovieDetails();
  }, []);

  return (
    <>
      {movie.length > 0 && (
        <div>
          {' '}
          Movie Details {searchMovie.title} {movieId}
        </div>
      )}
      {isLoading && <Loader />}
      {error && <p>{error.message}</p>}
    </>
  );
};
export default MovieDetails;
