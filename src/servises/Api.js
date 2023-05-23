import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '3fae8df0f78070a007ffb073b1444710';

export const fetchMovie = async () => {
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

// 'https://api.themoviedb.org/3/trending/all/day?language=en-US' \

// https://api.themoviedb.org/3/movie/550?api_key=3fae8df0f78070a007ffb073b1444710
