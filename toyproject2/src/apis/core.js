import axios from 'axios';

export const Axios = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Authorization: `bearer ${process.env.REACT_APP_AUTH_TOKEN}`,
  },
});
