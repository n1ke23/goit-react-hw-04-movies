import React from 'react';
// import List from './Components/List/List';
import './App.css';
// import Header from './Components/Header/Header';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom'
import Movies from './Conteiners/Movies/Movies';
// import Users from './Conteiners/Users/Users';

const App = () => {
  return (
    <div className="App">
      {/* <Header /> */}
      <NavLink exact to='/'>Home</NavLink>
      <NavLink exact to='/movies'>Movies</NavLink>


      <Switch>
        <Route path='/' exact render={()=> <h2>Home</h2>}></Route>
        <Route path='/movies' component={Movies} ></Route>
        <Redirect to='/'/>
      </Switch>
    </div>
  );
};

export default App;