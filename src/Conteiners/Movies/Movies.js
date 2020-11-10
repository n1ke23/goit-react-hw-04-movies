import React from 'react';
import { Switch, Route, NavLink, useRouteMatch } from 'react-router-dom'

const Movies = () => {
    const match = useRouteMatch()
    console.log(match);
    return (
        <div>
        <NavLink exact to={`${match.url}/cast`}>cast</NavLink>
      <NavLink exact to={`${match.url}/reviev`}>reviev</NavLink>

      
      <Switch>
        <Route path={`${match.url}/cast`} exact render={()=> <h2>cast</h2>}></Route>
        <Route path={`${match.url}/reviev`} exact render={()=><h2>reviev</h2>} ></Route>

      </Switch>
        </div>
    );
};

export default Movies;