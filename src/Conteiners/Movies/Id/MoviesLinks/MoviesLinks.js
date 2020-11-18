import React from 'react';
import { Switch, Route, NavLink, useLocation, useRouteMatch } from 'react-router-dom';
import { moviesLinks } from './../../../../Options/moviesLinks'


const MoviesLink = ({id}) => {
    const match = useRouteMatch()
    return (
        <>
            <ul>
                {moviesLinks.map(link => (<li key={id}><NavLink exact={link.exact ? true : false} to={`/movies/${id}${link.to}`}>{link.name}</NavLink></li>))}

            </ul>
        </ >
    );
};

export default MoviesLink;
