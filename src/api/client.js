import axios from 'axios';

export const finderInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});
