import React from 'react'
import Header from './Header'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { movieActions } from '../store/movie-slice';

const MovieDetail = (props) => {
    const dispatch = useDispatch()
    const location = useLocation();
    console.log('hi')
    console.log(props.title)

    const movieAdd = () => {
        const title = location.state.title
        const id = '2'
        const price = 10
        const poster = location.state.poster
    dispatch(movieActions.addMovie({id,
        title,
        price,
        poster}))
    }

    const currMovies = useSelector(state => state.movies.items)
    let movieTaken = false;
    for (let i = 0; i < currMovies.length; i++) {
      if (currMovies[i].title === location.state.title) {
          movieTaken = true;
      }
    }

    return (
        <div><br /><Link style={{fontWeight: "bold"}} to="/">Back</Link><Header />
        <div className="ui container">
            <div className="ui grid">
                <div className="ui row">
                    <div className="seven wide column">
                        <img alt={location.state.title}
                        src={ "https://image.tmdb.org/t/p/w500/" + location.state.poster} />
                    </div>
                    <div className="nine wide column" style={{textAlign: 'center', marginTop: '30px'}}>
                    <div className="ui fluid card">
                        <div className="content">
                        <h3>{location.state.title}</h3>
                        <h5>{location.state.overview}</h5>
                        <h3>
               {movieTaken ? <div>This movie is in your cart.</div> :
                <button className="ui primary button" onClick={movieAdd}>Add movie to cart</button> }
               </h3></div></div>
                                    </div>
                </div>
            </div>
            {location.state.title}
        </div></div>
        
    )
}

export default MovieDetail
