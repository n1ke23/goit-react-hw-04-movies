import axios from 'axios';

export const withCredentials = (url) => {
    return `${url}client_id=${process.env.REACT_APP_CLIENT_ID}&client_sicret=${process.env.REACT_APP_CLIENT_SICRET}`
}

export const request = async (method, url, body = null) => {
    const result = await axios[method](url, body);

    return result.data;
}

export const createSingle = (login) => {
    return withCredentials(`https://api.github.com/users/${login}?`)
}