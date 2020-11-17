import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { withCredentials, request } from './../../helpers/request'

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [notice, setNotice] = useState('');
  const location = useLocation();
  const search = queryString.parse(location.search);
  const history = useHistory();
  useEffect(() => {
    const url = withCredentials(search)
    request('get', url).then(res => {
      if (res.data.results.length) {
        setMovies(res.data.results);
      } else {
        setNotice("Sorry, we can't find anything for your request");
      }
    })
      .catch(error => setNotice(error.response.data.status_message));
  }, [search.query]);

  const handleChange = ({ target: { value } }) => {
    setQuery(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push({
      ...location,
      search: `?query=${query}`,
    });
    setQuery('');
  };

  // console.log(match);
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
                state: { from: location }
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