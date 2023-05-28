import { Loader } from 'components/Loader/Loader';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'servises/Api';
import {
  Link,
  AdditionalList,
  AdditionalListItem,
  AdditonalContainer,
  GenresList,
  MovieContainer,
  NavLink,
} from './MovieDetails.styled';

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
      <MovieContainer>
        <img
          src={`${
            movie.poster_path ? (
              `https://image.tmdb.org/t/p/original${movie.poster_path}`
            ) : (
              <div>No movie</div>
            )
          }`}
          alt={movie.original_title}
          width="380"
        />
        <div>
          <h2>{movie.title}</h2>
          <h3>Rating: {Math.round(movie.vote_average)}</h3>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <GenresList>
            {movie.genres?.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </GenresList>
        </div>
      </MovieContainer>
      <AdditonalContainer>
        <h2>Additional information</h2>
        <AdditionalList>
          <AdditionalListItem>
            <NavLink to="cast" state={location.state}>
              Cast
            </NavLink>
          </AdditionalListItem>
          <li>
            <NavLink to="reviews" state={location.state}>
              Reviews
            </NavLink>
          </li>
        </AdditionalList>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </AdditonalContainer>
    </>
  );
};
export default MovieDetails;
