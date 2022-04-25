import React from 'react'
import SearchBar from './SearchBar'
import axios from 'axios'
import MovieList from './MovieList'
import Header from './Header'

const MOVIE_KEY = process.env.REACT_APP_MOVIE_KEY;

class App extends React.Component {
  state = {results: [] }

  componentDidMount() {
    if(localStorage.getItem('localkey')) {
     this.setState({ results: JSON.parse(localStorage.getItem('localkey')) || []})
    }
  }
 
  onSubmit = async term => {
  const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
    params: {
        api_key: MOVIE_KEY, 
        query: term
          }
    })
    console.log('hi')
    console.log(response.data.results)
    const data = response.data.results
    this.setState({results: data })
    localStorage.setItem('localkey', JSON.stringify(data));
  }
 
  render() {
  return (
    <div>
      <Header loc="home"/>
      <SearchBar onFormSubmit={this.onSubmit} /><br />
      <MovieList results={this.state.results} />
    </div>
  )}
}

export default App