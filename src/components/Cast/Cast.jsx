import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'servises/Api';
import { CastList, CastListItem, Actor } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getCast = async () => {
      try {
        const cast = await fetchMovieCredits(movieId);
        setCast(cast);
      } catch (error) {
        console.log('error :>> ', error);
      }
    };
    getCast();
  }, [movieId]);
  return (
    <>
      {
        <CastList>
          {cast.map(({ id, profile_path, original_name, character }) => (
            <CastListItem key={id}>
              <img
                src={
                  profile_path ? (
                    `https://image.tmdb.org/t/p/original${profile_path}`
                  ) : (
                    <div>No cast</div>
                  )
                }
                alt={original_name}
              />
              <p>
                <Actor> Actor:</Actor> {original_name}
              </p>
              <p>
                <Actor>Character:</Actor> {character}
              </p>
            </CastListItem>
          ))}
        </CastList>
      }
    </>
  );
};
export default Cast;
