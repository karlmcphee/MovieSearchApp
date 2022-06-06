import React, { useState } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { movieActions } from '../store/movie-slice';
import PurchaseList from './PurchaseList'
import Header from './Header'
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const Cart = () => {

    let emptyCart = false
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const cartPrice = useSelector(state => state.movies.totalPrice)
    //const [movieItems, setMovieItems] = useState([])
    const movieItems = useSelector(state=> state.movies.items)
    if (movieItems.length == 0) {
      emptyCart = true
    }


    const removeMovie = () => {
    dispatch(movieActions.removeMovie('test'))
  }
  const addMovie = () => {
    const id = Math.floor(Math.random()*255);
    const title = 'tester'
    const price = 10
    const poster = 'poster1'
    dispatch(movieActions.addMovie({id,
      title,
      price,
    poster}))
  //  setMovieItems([{id: 1, title: 'test', price: 10}])
  }

  const finishPurchase = () => {
    //database order submittal
    dispatch(movieActions.clearCart());
    axios.post("http://localhost:9000/purchase/save", {
      movies: movieItems,
      price: cartPrice,  
  })
      .then(res => {
        console.log(res)
        let path = `/home`; 
        navigate(path);

  })
}

  

  return (

    <div><Header />
    {emptyCart ? <div className="container" ><h1>Your cart is currently empty.</h1> </div> :
      <div><h1>Your Cart</h1>
    <div className="ui container">
    
    <PurchaseList items={movieItems}/>
    <div style={{float: 'right'}}>
      <label style={{marginVertical: 10, fontWeight: 'bold'}}>Total price: ${cartPrice.toFixed(2)}</label>
      </div><br /><br />
      <div style={{float: 'right'}}>
    <button style={{marginVertical: 10}} className="ui button positive" onClick={finishPurchase}>Complete purchase</button> 
    </div>
    </div> </div>}
    </div>
  )

  }
    

export default Cart