import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '3fae8df0f78070a007ffb073b1444710';

export const fetchTrendingMovies = async () => {
  const response = await axios(
    `${BASE_URL}trending/all/day?api_key=${API_KEY}`
  );
  if (response.status === 404) {
    throw new Error(
      'Error loading movies from themoviedb.org',
      response.status
    );
  }
  return response.data;
};

export const fetchSearchMovie = async () => {
  const response = await axios(`${BASE_URL}search/movie?api_key=${API_KEY}`);
  if (response.status === 404) {
    throw new Error('Error loading movie from themoviedb.org', response.status);
  }
  return response.data;
};

export const fetchMovieDetails = async movieId => {
  const response = await axios(
    `${BASE_URL}movie/${movieId}?api_key=${API_KEY}`
  );
  if (response.status === 404) {
    throw new Error(
      'Error loading details from themoviedb.org',
      response.status
    );
  }
  return response.data;
};

export const fetchMovieCredits = async movieId => {
  const response = await axios(
    `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`
  );
  if (response.status === 404) {
    throw new Error(
      'Error loading credits from themoviedb.org',
      response.status
    );
  }
  return response.data;
};

export const fetchMovieReviews = async movieId => {
  const response = await axios(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  if (response.status === 404) {
    throw new Error(
      'Error loading credits from themoviedb.org',
      response.status
    );
  }
  return response.data;
};
