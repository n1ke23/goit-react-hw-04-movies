import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { getMoviesQuery, request } from './../../helpers/request'
import { createGlobalStyle } from 'styled-components';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [notice, setNotice] = useState('');
  const location = useLocation();
  const search = queryString.parse(location.search);
  const history = useHistory();
  console.log(search);
  console.log(location);

  useEffect(() => {
    if(location.query){

    
    const url = getMoviesQuery(location.query)
    setQuery(location.query)
    request('get', url)
    .then(res => {
      console.log(res)
      if (res.results.length) {
        setMovies(res.results);
      } else {
        setNotice("Sorry, we can't find anything for your request");
      }
    }) }
  }, []);

  const handleChange = ({ target: { value } }) => {
    setQuery(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const url = getMoviesQuery(query)
    request('get', url)
    .then(res => {
      if (res.results.length) {
        setMovies(res.results);
      } else {
        setNotice("Sorry, we can't find anything for your request");
      }
    }) 
    history.push({
      pathname: location.pathname,
      search: `?query=${query}`,
      query
    });
  };

   console.log(movies)
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          name="query"
          value={query}
          onChange={handleChange}
        />

        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link
              to={{
                pathname: `/movies/${movie.id}`,
                state: { from: location.pathname, search: query }
              }}>
              {movie.title || movie.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Movies;