import React from 'react';
//routing
import { Switch, Route, Redirect } from 'react-router-dom';
//components
import { HomePage } from './pages/HomePage';
//styles
import './App.css';


const App = () => {
  return (
    <Switch>
      <Route path='/' exact render={() => <HomePage/>}/>
      <Route path='/homepage' render={() => <HomePage/>}/>
      <Route path='/react_rickandmorty_TZ' render={() => <Redirect to='/homepage'/>}/>	
      <Route render={() => <h1>404 Not Found</h1>}/>
    </Switch>
  )
}
export { App };