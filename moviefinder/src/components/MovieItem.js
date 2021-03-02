import React from 'react'
import { useHistory } from 'react-router-dom'

const MovieItem = ({ poster, title, overview, release, key }) => {
    const history = useHistory();


    return (
      <div  onClick={() => history.push('/MovieDetail', {
                                poster: poster,
                                title: title,
                                overview: overview,
                                release: release})}
            className="video-item item">
        <img
          alt={title}
          className="ui image"
          style={{width: "100px"}}
          src={"https://image.tmdb.org/t/p/w500/" + poster}
        />
        <div className="content">
          <div className="header">{title}</div>
        </div>
      </div>
    );
  };

export default MovieItem
