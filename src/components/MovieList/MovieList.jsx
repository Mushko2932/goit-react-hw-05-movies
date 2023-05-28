import { useLocation, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FilmsList } from './MovieList.styled';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <FilmsList>
      {movies.map(({ id, original_title }) => (
        <li key={id}>
          <Link state={{ from: location }} to={`/movies/${id}`}>
            {original_title}
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
