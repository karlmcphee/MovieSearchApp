import React from 'react'
import MovieItem from './MovieItem'

const MovieList = ({ results }) => {

        const renderedList = results.map(result => {
        console.log(result.poster_path)
          return (
            <MovieItem
              key={result.id}
              title={result.title}
              poster={result.poster_path}
              overview={result.overview}
              release={result.release_date}
              genre={result.genre}
            />
          );
        });
      
        return <div className="ui relaxed divided list">{renderedList}</div>;
    }

export default MovieList
