import axios from 'axios';

export const withCredentials = (url) => {
    return `${url}api_key=${process.env.REACT_APP_CLIENT_KEY}`
}

export const request = async (method, url, body = null) => {
    const result = await axios[method](url, body);
    return result;
}
export const getMoviesQuery = async (query) => {
    const url = `search/movie?query=${query}&api_key=${process.env.REACT_APP_API_KEY}`;
    const result = await axios.get(url);
    return result;
};