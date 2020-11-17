import axios from 'axios';

export const withCredentials = (url) => {
    return `${url}api_key=${process.env.REACT_APP_CLIENT_KEY}`
}

export const request = async (method, url, body = null) => {
    const result = await axios[method](url, body);
    return result.data;
}
export const getMoviesQuery = (query) => {
    return withCredentials(`https://api.themoviedb.org/3/search/movie?query=${query}&`);
};
export const searchFilm = (id) => {
    return withCredentials(`https://api.themoviedb.org/3/movie/${id}?`)
}