import React from 'react'
import SearchBar from './SearchBar'
import axios from 'axios'
import Button from './Button'
import MovieList from './MovieList'

const MOVIE_KEY = process.env.REACT_APP_MOVIE_KEY;

class App extends React.Component {
  state = {results: [] }
 
  onSubmit = async term => {
  const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
    params: {
        api_key: MOVIE_KEY, 
        query: term
          }
    })
    console.log(response)
    const t = response.data.results
    this.setState({results: t })

   }
  render() {
  return (
    <div>
      {localStorage.getItem('user')!=='null' ? (<div style={{float: 'left', width: '50px', position: 'relative', zIndex: 10}}>
        <Button text="Personalized movies" link="/Recommended" /></div>) : ''}
      <div style={{display:'flex', flexDirection: 'row', float: 'right', position: 'relative', zIndex: 10}}>
      <Button text="Register" link="/Register" />
      <Button text="Login" link="/Login" /></div>
      <SearchBar onFormSubmit={this.onSubmit} /><br />
      <MovieList results={this.state.results} />
    </div>
  )}
}

export default App