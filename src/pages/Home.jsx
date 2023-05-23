import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'servises/Api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getTrandingMovies() {
      try {
        setIsLoading(true);
        setError(false);
        const fetchedMovies = await fetchTrendingMovies();
        setMovies(prevState => [...prevState, ...fetchedMovies.results]);
      } catch (error) {
        console.log('error :>> ', error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getTrandingMovies();
  }, []);
  return (
    <>
      {isLoading && <Loader />}
      <div>Home</div>;
    </>
  );
};
export default Home;