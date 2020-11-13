import React from 'react';
// import List from './Components/List/List';
import './App.css';
// import Header from './Components/Header/Header';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom'
import Nav from './Conteiners/Nav/Nav';
import Movies from './Conteiners/Movies/Movies'
import Home from './Conteiners/Home/Home'
import Id from './Conteiners/Movies/Id/Id'
// import Users from './Conteiners/Users/Users';
import { routes } from "./routes";

const App = () => {
  return (
    <div className="App">
      <Nav />

      <Switch>
        {routes.map((route) => (
          <Route key={route.path} />
        ))}
        <Redirect to='/' />
      </Switch>
    </div>
  );
};

export default App;

{/* <Switch>
  <Route path='/' exact render={Home}></Route>
  <Route path='/movies' component={Movies} ></Route>
  <Route path="/movies/:Id" component={Id} />
  <Redirect to='/' />
</Switch> */}