import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './components/Main'
import Login from './components/Login'
import Register from './components/Register'
import MovieDetail from './components/MovieDetail'
import RankedMovies from './components/RankedMovies'



class App extends React.Component {
  render() {
  return (
    <div className="ui container">
    <BrowserRouter>
      <div>
        <Route path="/" exact component={Main} />
        <Route path="/Login" exact component={Login} />
        <Route path="/Register" exact component={Register} />
        <Route path="/MovieDetail" exact component={MovieDetail} />
        <Route path="/Recommended" exact component={RankedMovies} />
      </div>
    </BrowserRouter></div>
  )}
}

export default App
