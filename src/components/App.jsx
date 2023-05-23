import Home from 'pages/Home';
import MovieDetails from 'pages/MovieDetails';
import Movies from 'pages/Movies';
import { Link, Route, Routes } from 'react-router-dom';
import NotFound from './NotFound';
import Reviews from 'pages/Reviews';
import Cast from 'pages/Cast';

export const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/movies/:movieId">MovieDetails</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        <Route path="/movies/:movieId/cast" element={<Cast />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
