import { Loader } from 'components/Loader/Loader';
import MovieCard from 'components/MovieCard/MovieCard';
import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'servises/Api';

const MovieDetails = () => {
  const { movieId } = useParams();

  const searchMovie = fetchMovieDetails(movieId);
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    async function getMovieDetails() {
      try {
        setIsLoading(true);
        setError(false);
        const fetchedMovieDetails = await fetchMovieDetails(movieId);
        setMovie(prevState => [...prevState, ...fetchedMovieDetails.results]);
      } catch (error) {
        console.log('error :>> ', error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getMovieDetails();
  }, [movieId]);

  return (
    <>
      <Link to={location.state?.from ?? '/'}>Go home</Link>

      {movie.length > 0 && (
        <div>
          {' '}
          Movie Details {searchMovie.title} {movieId}
        </div>
      )}
      {isLoading && <Loader />}
      {error && <p>{error.message}</p>}
      {movie && <MovieCard movie={movie} />}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default MovieDetails;
