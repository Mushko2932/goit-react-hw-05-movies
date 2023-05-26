import PropTypes from 'prop-types';

const MovieCard = ({ movie: { poster_path, title, overview } }) => {
  return (
    <>
      <div>
        <img
          src={
            poster_path ? (
              `https://image.tmdb.org/t/p/original${poster_path}`
            ) : (
              <div>No movie</div>
            )
          }
          alt={title}
          width="380"
        />
      </div>
      <h2>{title}</h2>
      <div>{overview}</div>
    </>
  );
};

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired,
};
