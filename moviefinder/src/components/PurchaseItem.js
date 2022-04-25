import React from 'react'
import { useDispatch } from 'react-redux'
import { movieActions } from '../store/movie-slice'
import classes from './PurchaseItem.module.css';

const PurchaseItem = props => {
  const dispatch = useDispatch()

  const removeItem = () => {
    dispatch(movieActions.removeMovie(props.id))
  }
  return (
    <div>
    <div className={classes.item}>
      <div> <img alt={props.title} height={100}
            src={ "https://image.tmdb.org/t/p/w500/" + props.poster} /></div>
      <div>{props.title}</div>
      <div>${props.price.toFixed(2)}</div>
      </div>
      <div style={{marginTop: 10, marginBottom: 20}}><button onClick={removeItem}>Remove from cart</button></div>
      </div>
  )
}

export default PurchaseItem