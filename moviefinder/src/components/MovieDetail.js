import React from 'react'

const MovieDetail = (props) => {
    console.log(props.location.state)
    return (
        <div className="ui container">
            <div className="ui grid">
                <div className="ui row">
                    <div className="seven wide column">
                        <img alt={props.location.state.title}
                        src={ "https://image.tmdb.org/t/p/w500/" + props.location.state.poster} />
                    </div>
                    <div className="nine wide column" style={{textAlign: 'center', marginTop: '30px'}}>
                        <h3>{props.location.state.title}</h3>
                        <h5>{props.location.state.overview}</h5>
                    </div>
                </div>
            </div>
            {props.location.state.title}
        </div>
    )
}

export default MovieDetail
