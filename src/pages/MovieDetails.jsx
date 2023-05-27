import { Loader } from 'components/Loader/Loader';
import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'servises/Api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    async function getMovieDetails() {
      try {
        const fetchedMovieDetails = await fetchMovieDetails(movieId);
        setMovie(fetchedMovieDetails);
      } catch (error) {
        console.log('error :>> ', error);
      }
    }
    getMovieDetails();
  }, [movieId]);

  return (
    <>
      <Link to={backLinkHref}>Go back</Link>
      {/* {movie && <MovieCard movie={movie} />} */}
      <div>
        <img
          src={`${
            movie.poster_path ? (
              `https://image.tmdb.org/t/p/original${movie.poster_path}`
            ) : (
              <div>{movie.original_title}</div>
            )
          }`}
          alt={movie.original_title}
          width="380"
        />
        <div>
          <h2>{movie.original_title}</h2>
          <h3>Rating: {Math.round(movie.vote_average)}</h3>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <ul>
            {movie.genres?.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <h2>Additional information</h2>
        <ul>
          <li>
            <Link to="cast" state={location.state}>
              Cast<span>.</span>
            </Link>
          </li>
          <li>
            <Link to="reviews" state={location.state}>
              Reviews<span>.</span>
            </Link>
          </li>
        </ul>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};
export default MovieDetails;
