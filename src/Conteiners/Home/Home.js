import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import { withCredentials, request } from "./../../helpers/request"

const Home = () => {
    const [arrayFilms, setArrayFilms] = useState([])

    useEffect(() => {
        (async () => {
            const url = withCredentials("https://api.themoviedb.org/3/trending/all/day?")
            const data = await request('get', url).then(data => setArrayFilms(data.data.results));

        })();
    }, []);
    console.log(arrayFilms)
    return (
        <>
            <h1>home</h1>
            <ul>
                {arrayFilms.map(movie => (
                    <li key={movie.id}>
                        <NavLink to={`/movies/${movie.id}`}  >
                            {movie.title || movie.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Home;

