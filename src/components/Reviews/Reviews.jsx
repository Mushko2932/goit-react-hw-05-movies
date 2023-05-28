import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'servises/Api';
import { ReviewsAuthor, ReviewsList, ReviewsContent } from './Reviews.styled';

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
    <div>No Reviews</div>
  ) : (
    <ReviewsList>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <ReviewsContent>
            <ReviewsAuthor>Author:</ReviewsAuthor> {author}
          </ReviewsContent>
          <ReviewsContent>{content}</ReviewsContent>
        </li>
      ))}
    </ReviewsList>
  );
};
export default Reviews;
