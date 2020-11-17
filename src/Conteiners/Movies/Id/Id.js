import React, { useState, Suspense } from 'react';
import { Switch, Route, NavLink, useHistory, useLocation, useParams } from 'react-router-dom';
// import MoviesLink from './MoviesLinks/MoviesLinks';
import { moviesRouts } from './../../../Options/Options'
// import { useRouteMatch } from 'react-router-dom';

const Id = () => {
  // const match = useRouteMatch()
  const history = useHistory();
  const location = useLocation();
  const [movie, setMovie] = useState([]);

  const goBack = () => {
    const { state } = location;
    if (state && state.from) {
      return history.push(state.from);
    }
    history.push("/");
  };
  return (
    <>
      <button type="button" onClick={goBack}>
        Go back
      </button>


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