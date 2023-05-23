import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  return <div>Movie Details - {movieId}</div>;
};
export default MovieDetails;
