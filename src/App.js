import React from 'react';
// import List from './Components/List/List';
import './App.css';
// import Header from './Components/Header/Header';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom'
import Nav from './Conteiners/Nav/Nav';
// import Users from './Conteiners/Users/Users';
import { withCredentials, request } from './helpers/request'

// const url = withCredentials("https://api.themoviedb.org/3/movie/550?")
// request('get', url).then(console.log)
const App = () => {
  return (
    <div className="App">
      {/* <Header /> */}
      <Nav />

      <Switch>
        <Route path='/' exact render={() => <h2>Home</h2>}></Route>
        {/* <Route path='/movies' component={ } ></Route> */}
        <Redirect to='/' />
      </Switch>
    </div>
  );
};

export default App;