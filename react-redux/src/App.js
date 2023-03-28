import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Cart from './pages/Cart'
import CartDetails from './pages/CartDetails'

const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}>Home</Route>
        <Route path='/cart' element={<Cart/>}>Cart</Route>
        <Route path='/cart-details' element={<CartDetails/>}>Cart</Route>
      </Routes>
    </>
  )
}

export default App