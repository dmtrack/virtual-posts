import axios from 'axios';

const API_URL = process.env.REACT_APP_API;

const api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
});

export const http = Object.freeze({
    API_URL,
    api,
});
