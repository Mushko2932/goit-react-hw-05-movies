import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'servises/Api';

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const cast = await fetchMovieCredits(movieId);
        setCast(cast);
      } catch (error) {
        console.log('error :>> ', error);
      }
    };
    fetchCast();
  }, [movieId]);
  return (
    <>
      {
        <ul>
          {cast.map(({ id, poster_path, original_name, character }) => (
            <li key={id}>
              <img
                src={
                  poster_path ? (
                    `https://image.tmdb.org/t/p/original${poster_path}`
                  ) : (
                    <div>No movie</div>
                  )
                }
                alt={original_name}
              />
              <p>
                <span> Actor:</span> {original_name}
              </p>
              <p>
                <span>Character:</span> {character}
              </p>
            </li>
          ))}
        </ul>
      }
    </>
  );
};
export default Cast;
