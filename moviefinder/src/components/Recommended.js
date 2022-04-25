import React from 'react'
import axios from 'axios'
import MovieList from './MovieList'
import Header from './Header'

const MOVIE_KEY = process.env.REACT_APP_MOVIE_KEY;

class RankedMovies extends React.Component {

    state={results: []}

    async componentDidMount() {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
        params: {
             api_key: MOVIE_KEY, 
             }
    })
        console.log(response)
        const t = response.data.results
        this.setState({results: t })
    }
    
    render() {
    return (
        <div>
            <Header loc="recommended"/>
            <MovieList results={this.state.results} />
        </div>
    )}
}

export default RankedMovies
