import { Route, Routes } from 'react-router-dom'
import './App.css'
import React from 'react'
import Home from './Home'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Shop from './components/shop/Shop'
import Nav from './components/navigations/Nav'
import LoginPage from './components/Register page/LoginPage'
import Signup from './components/signup/Signup'
import ShopDetails from './components/shopDetails/ShopDetails'
import Cart from './components/cart/Cart'
import Checkout from './components/checkout/Checkout'


function App() {

  return (
    <>
     <Header/>
     <Nav/>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/shopdetails' element={<ShopDetails/>}/>
        <Route path='/wishlist' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
