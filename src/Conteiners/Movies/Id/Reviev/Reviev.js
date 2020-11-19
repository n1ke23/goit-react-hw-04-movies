import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { fetchRevievs, request } from './../../../../helpers/request';
import { v4 as uuidv4 } from 'uuid';

const Revievs = () => {
    const [revievs, setRevievs] = useState([]);
    const filmId = useRouteMatch().params.id;

    useEffect(() => {
        (async () => {
            const url = fetchRevievs(filmId);
            request('get', url)
                .then(res => setRevievs(res.results))
        })();
    }, [filmId]);
    return (
        <>
            {(!!revievs.length && (
                <ul>
                    {revievs.map(reviev => (
                        <li key={uuidv4()}>
                            <h3>Author: {reviev.author}</h3>
                            <p>{reviev.content}</p>
                        </li>
                    ))}
                </ul>
            )) || <p className="descr">We don't have any reviews for this movie.</p>}
        </>
    );
};

export default Revievs;