import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '3fae8df0f78070a007ffb073b1444710';

export const fetchTrendingMovies = async () => {
  const { data } = await axios(
    `${BASE_URL}trending/all/day?api_key=${API_KEY}`
  );
  return data.results;
};

export const fetchSearchMovie = async query => {
  const { data } = await axios(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  );
  return data.results;
};

export const fetchMovieDetails = async movieId => {
  const { data } = await axios(
    `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

export const fetchMovieCredits = async movieId => {
  const { data } = await axios(
    `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return data.cast;
};

export const fetchMovieReviews = async movieId => {
  const { data } = await axios(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return data.results;
};
