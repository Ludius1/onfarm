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
import Blog from './components/blog/Blog'
import ErrorPage from './components/errorPage/ErrorPage'
import {Toaster} from 'sonner'
import FeatureddBrand from './components/admin/FeatureddBrand'
import UserProfile from './components/userprofile/UserProfile'
import CreatePost from './components/admin/createPosts/CreatePost'


function App() {

  return (
    <>
     <Header/>
     <Nav/>
     <Toaster/>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        {/* <Route path='/shop/categories/:category' element={<kk/>}/> */}
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/shopdetails/:id' element={<ShopDetails/>}/>
        <Route path='/wishlist' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/userprofile' element={<UserProfile/>}/>
        <Route path='/featuredbrands' element={<FeatureddBrand/>}/>
        <Route path='/error/404' element={<ErrorPage/>}/>
        <Route path='/create-posts' element={<CreatePost/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
