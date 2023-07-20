import axios from "axios";

const baseURL = import.meta.env.VITE_REACT_APP_BASEURL;
const apiKey = import.meta.env.VITE_REACT_APP_APIKEY;
const popular = `/movie/popular?api_key=${apiKey}`;

export const getMovieListPopular = async () => {
  const movie = await axios.get(`${baseURL}${popular}`);
  return movie.data.results;
};

export const getMovieListNowPlaying = async () => {
  const movie = await axios.get(`${baseURL}/movie/now_playing?page=1&api_key=${apiKey}`);
  return movie.data.results;
};

export const getMovieListUpComing = async () => {
  const movie = await axios.get(`${baseURL}/movie/upcoming?page=1&api_key=${apiKey}`);
  return movie.data.results;
};

export const getMovieListGenre = async () => {
  const movie = await axios.get(`${baseURL}/genre/movie/list?page=1&api_key=${apiKey}`);
  return movie.data.genres;
};

export const searchMovie = async (q) => {
  const search = await axios.get(`${baseURL}/search/movie?query=${q}&page=1&api_key=${apiKey}`);
  return search.data;
};
