import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'servises/Api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieReviews() {
      try {
        const fetchedMovieReviews = await fetchMovieReviews(movieId);
        setReviews(fetchedMovieReviews);
      } catch (error) {
        console.log('error :>> ', error);
      }
    }
    getMovieReviews();
  }, [movieId]);
  return reviews.length === 0 ? (
    <h2>No Reviews</h2>
  ) : (
    <ul>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <p>
            <span>Author:</span> {author}
          </p>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};
export default Reviews;
