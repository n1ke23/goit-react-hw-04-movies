import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import { withCredentials, request } from "./../../helpers/request"
import './Home.css'
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
    const [arrayFilms, setArrayFilms] = useState([])

    useEffect(() => {
        (async () => {
            const url = withCredentials("https://api.themoviedb.org/3/trending/movie/day?")
            await request('get', url).then(data => setArrayFilms(data.results));

        })();
    }, []);


    return (
        <>
            <h1 className='home-title'>Trending today</h1>
            <ul>
                {!!arrayFilms.length && arrayFilms.map(movie => (
                    <li key={uuidv4()}>
                        <NavLink to={`/movies/${movie.id}`}>
                            {movie.title || movie.name}
                        </NavLink>
                    </li>
                    
                ))}
            </ul>
        </>
    );
};

export default Home;

