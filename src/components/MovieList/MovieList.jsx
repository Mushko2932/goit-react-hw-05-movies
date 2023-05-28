import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FilmsList, Link, MovieTitle } from './MovieList.styled';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <FilmsList>
      {movies.map(({ id, poster_path, title }) => (
        <li key={id}>
          <Link state={{ from: location }} to={`/movies/${id}`}>
            <img
              src={`${
                poster_path ? (
                  `https://image.tmdb.org/t/p/original${poster_path}`
                ) : (
                  <div>No movie</div>
                )
              }`}
              alt={title}
              width="340"
            />
            <MovieTitle>{title}</MovieTitle>
          </Link>
        </li>
      ))}
    </FilmsList>
  );
};

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
