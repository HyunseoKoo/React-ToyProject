import axios from 'axios';

//테스트용
export const Axios = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
})