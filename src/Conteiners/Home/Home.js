import React, { useState, useEffect } from 'react';

import { withCredentials, request } from "./../../helpers/request"

const Home = () => {
    // const [arrayFilms, setArrayFilms] = useState([])
    // const [films, setFilms] = useState([])

    // useEffect(() => {
    //     (async () => {
    //         const url = withCredentials("https://api.themoviedb.org/3/trending/all/day?")
    //         const data = await request(url).then((data) => data.results);
    //         setArrayFilms(data);
    //     })();
    // });

    // useEffect(() => {y
    //     (async () => {
    //         const url = withCredentials("https://api.themoviedb.org/3/trending/all/day?")
    //         const data = await request(url).then((data) => data.results);
    //         setArrayFilms(data);
    //     })();
    // }, []);

    return (
        <>
            <h1>home</h1>
            {/* <ul>
                {arrayFilms.map((el) => (
                    console.log(el)<
                ))}
            </ul> */}
        </>
    );
};

export default Home;

