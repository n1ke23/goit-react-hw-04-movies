import React from 'react';
import { Switch, Route, NavLink, useRouteMatch } from 'react-router-dom'
import { navLinks } from './../../Options/Options'

const Movies = () => {
  return (
    <>
      <ul>
        {navLinks.map(link => <li><NavLink exact={link.exact ? true : false} to={link.to}>{link.name}</NavLink></li>)}
      </ul>
    </>
  );
};

export default Movies;
{/* <ul>
  <li><NavLink exact to={`${match.url}/cast`}>cast</NavLink></li>
  <li><NavLink exact to={`${match.url}/reviev`}>reviev</NavLink></li>
</ul> 
<Switch>
  <Route path={`${match.url}/cast`} exact render={() => <h2>cast</h2>}></Route>
  <Route path={`${match.url}/reviev`} exact render={() => <h2>reviev</h2>} ></Route>

</Switch>
*/}