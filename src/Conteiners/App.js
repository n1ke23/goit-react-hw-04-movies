import React, { Suspense } from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom'
import './App.css';
import Nav from './Nav/Nav';
// import Movies from './Movies/Movies'
// import Home from './Home/Home'
// import Id from './Movies/Id/Id'
import { routes } from "./../Options/Options";
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Suspense fallback={<h2>Load...</h2>}>
        <Switch>
          {routes.map((route) => (
            <Route key={uuidv4()} path={route.path} component={route.component} exact={route.exact ? true : false} />
          ))}
          <Redirect to='/' />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;

{/* <Switch>
  <Route path='/' exact component={Home}></Route>
  <Route path='/movies' component={Movies} ></Route>
  <Route path="/movies/:Id" component={Id} />
  <Redirect to='/' />
</Switch> */}