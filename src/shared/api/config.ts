import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';
const api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
});

export const http = Object.freeze({
    API_URL,
    api,
});
