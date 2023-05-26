import { Loader } from 'components/Loader/Loader';
import MovieCard from 'components/MovieCard/MovieCard';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { fetchMovieDetails } from 'servises/Api';

const MovieDetails = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieId = searchParams.get('movieId') ?? '';

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

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
      <input
        type="text"
        value={movieId}
        onChange={e => setSearchParams({ movieId: e.target.value })}
      />
      <button onClick={() => setSearchParams()}>Search</button>
      {movie.length > 0 && (
        <div>
          {' '}
          Movie Details {searchMovie.title} {movieId}
        </div>
      )}
      {isLoading && <Loader />}
      {error && <p>{error.message}</p>}
      <MovieCard />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default MovieDetails;
