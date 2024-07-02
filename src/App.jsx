import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Products from './components/Products'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ProductDetails from './components/ProductDetails'
import Cart from './components/Cart'
import SearchItems from './components/SearchItems'
import ErrorPage from './components/ErrorPage'
import { Link } from 'react-router-dom'
import { items } from './components/Data'

const App = () => {
  const [data, setData] = useState([...items])
  const [cart, setCart] = useState([])  
  
  return (
    <>
    <Router>
    <Navbar cart = {cart} setData = {setData} />
    <Routes>
      <Route path='/' element= {<Products cart = {cart} setCart={setCart} items = {data} />} />
      <Route path='/products/:id' element= {<ProductDetails cart = {cart} setCart={setCart} />} />
      <Route path='/cart' element= {<Cart cart = {cart} setCart= {setCart}/>} />
      <Route path='/search/:term' element= {<SearchItems cart = {cart} setCart={setCart} />} />
      <Route path='*' element= {<ErrorPage />} />
    </Routes>
    </Router>
    </>
  )
}

export default App