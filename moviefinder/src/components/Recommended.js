import React from 'react'
import axios from 'axios'
import MovieList from './MovieList'
import Header from './Header'

const MOVIE_KEY = process.env.REACT_APP_MOVIE_KEY;

class RankedMovies extends React.Component {

    state={results: [], results2: ''}

    async componentDidMount() {
        try {
        const initres = await axios.get("http://localhost:9000/recs")
        this.setState({results2: initres.data})
        } catch (error) {
            console.log(error)
        }
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
            <div style={{textAlign: "center"}}><h3>Most popular current movies!</h3></div>
            <label>{this.state.results2}</label>
            <MovieList results={this.state.results} />
        </div>
    )}
}

export default RankedMovies
