import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { fetchMovieReviews } from 'servises/Api';

const Reviews = () => {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getMovieReviews() {
      try {
        setIsLoading(true);
        setError(false);
        const fetchedMovieReviews = await fetchMovieReviews();
        setMovie(prevState => [...prevState, ...fetchedMovieReviews.results]);
      } catch (error) {
        console.log('error :>> ', error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getMovieReviews();
  }, []);
  return (
    <>
      {movie.length > 0 && <div>Reviews</div>}
      {isLoading && <Loader />}
      {error && <p>{error.message}</p>}
      <div>Reviews</div>
    </>
  );
};
export default Reviews;
