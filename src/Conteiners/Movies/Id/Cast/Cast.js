import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { fetchCast, request } from './../../../../helpers/request';
import { v4 as uuidv4 } from 'uuid';

const Cast = () => {
    const [cast, setCast] = useState([]);
    const filmId = useRouteMatch().params.id;
    useEffect(() => {
        (async () => {
            const url = fetchCast(filmId);
            request('get', url)
                .then(res => setCast(res.cast))
        })();
    }, [filmId]);
    return (
        <>
            {(!!cast.length && (
                <ul>
                    {cast.map(actor => (
                        <li key={uuidv4()}>
                            {actor.profile_path && (
                                <img
                                    src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
                                    width="200"
                                    alt={actor.name}
                                />
                            )}
                            <h3>{actor.name}</h3>
                            <p>Character: {actor.character}</p>
                        </li>
                    ))}
                </ul>
            )) || (
                    <p className="descr">The resource you requested could not be found.</p>
                )}
        </>
    );
};

export default Cast;