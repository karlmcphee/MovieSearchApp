import React from 'react'
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';
import Main from './components/Main'
import Login from './components/Login'
import Register from './components/Register'
import MovieDetail from './components/MovieDetail'
import Recommended from './components/Recommended'
import Browse from './components/Browse'
import Cart from './components/Cart'



class App extends React.Component {
  render() {
  return (
    <div className="ui container">
    <BrowserRouter>
      <div>
        <Routes>
      <Route path="/" element={<Navigate replace to="/home"/>} />
        <Route path="/home" element={<Main />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Browse" element={<Browse />} />
        <Route path="/MovieDetail" element={<MovieDetail />} />
        <Route path="/Recommended" element={<Recommended />} />
        <Route path="/Cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter></div>
  )}
}

export default App
