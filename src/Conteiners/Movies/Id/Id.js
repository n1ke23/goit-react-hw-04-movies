import React, { Suspense, useEffect, useState } from 'react';
import { Switch, Route, NavLink, useHistory, useLocation, useParams } from 'react-router-dom';
// import MoviesLink from './MoviesLinks/MoviesLinks';
import { moviesRouts } from './../../../Options/Options'
// import { useRouteMatch } from 'react-router-dom';
import {searchFilm, request} from './../../../helpers/request'

const Id = () => {
  // const match = useRouteMatch()
  const history = useHistory();
  const[film, setFilm] = useState({})
  const[search, setSearch] = useState('')
  const location = useLocation();
  const id = useParams().id
  console.log(id);
  useEffect(() => {
    console.log(location);
    setSearch(location.state.search)
    const url = searchFilm(id)
    request('get', url).then(res=>setFilm(res))
  }, [])
console.log(film);
  const goBack = () => {
    const { state } = location;
    if (state && state.from) {
      return history.push({
      pathname: state.from,
      search:`query=${search}`,
      query: search
    });
    }
    history.push("/");
  };
  return (
    <>
      <button type="button" onClick={goBack}>
        Go back
      </button>
      <div >            
            {film.id && (<div>
                <div >
                    <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt={film.title} />
                </div>
                <div>
                    <h1 >{film.title}</h1>
                    <p>User Score: {film.runtime}%</p>
                    <h2>Genre</h2>
                    <ul >
                        {film.genres.map(genre => <li key={genre.id}><p>{genre.name}</p></li>)}
                    </ul>
                    <h3>{film.tagline}</h3>
                    <h2>Overview</h2>
                    <p>{film.overview? film.overview : 'The resource you requested could not be found.'}</p>
                </div>
            </div>)}
            </div>
      {/* <MoviesLink /> */}
      {/* <NavLink to={`/movies/${match.url}/cast`}>cast</NavLink>
        <NavLink to={`/movies/${match.url}/reviev`}>reviev</NavLink> */}
      <Suspense fallback={<h2>Load...</h2>}>
        <Switch>
          {moviesRouts.map((route) => (
            <Route key={route.path} path={route.path} component={route.component} exact={route.exact ? true : false} />
          ))}

        </Switch>
      </Suspense>
    </>
  );
};

export default Id;