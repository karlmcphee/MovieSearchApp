import React from 'react'
import { useNavigate } from 'react-router-dom'

const MovieItem = ({ poster, title, overview, release, genre, key }) => {
    const navigate = useNavigate();


    return (
      <div  onClick={() => navigate('/MovieDetail', {state : {
                                poster: poster,
                                title: title,
                                overview: overview,
                                release: release}})}
            className="video-item item">
        <img
          alt={title}
          className="ui image"
          style={{width: "100px"}}
          src={"https://image.tmdb.org/t/p/w500/" + poster}
        />
        <div className="content">
          <div className="header">{title} {genre}</div>
        </div>
      </div>
    );
  };

export default MovieItem
