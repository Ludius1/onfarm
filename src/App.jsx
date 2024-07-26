import { Route, Routes } from "react-router-dom";
import "./App.css";
import React, { useContext } from "react";
import Home from "./Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Shop from "./components/shop/Shop";
import Nav from "./components/navigations/Nav";
import LoginPage from "./components/Register page/LoginPage";
import Signup from "./components/signup/Signup";
import ShopDetails from "./components/shopDetails/ShopDetails";
import Cart from "./components/cart/Cart";
import Checkout from "./components/checkout/Checkout";
import Blog from "./components/blog/Blog";
import ErrorPage from "./components/errorPage/ErrorPage";
import { Toaster } from "sonner";
import FeatureddBrand from "./components/admin/FeatureddBrand";
import UserProfile from "./components/userprofile/UserProfile";
import CreatePost from "./components/admin/createPosts/CreatePost";
import Dashboard from "./components/admin/Dashboard/Dashboard";
import Faqs from "./components/faqqs/Faqs";
import Loader from "./components/loader/Loader";
import { useState } from "react";
import AboutUs from "./components/aboutUs/AboutUs";
import { AuthContext, AuthProvider } from "./context/authContext";
import ContactUs from "./components/contactUs/ContactUs";
import BlogDetails from "./components/latestnews/BlogDetails";
import Latestnews from "./components/latestnews/Latestnews";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };
  
  return (
    <>
      <AuthProvider>
        <Toaster position="top-right" font-size="20px" />
        <Header />
        <Nav />
        {/* <Loader/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/faqs" element={<Faqs />} />
        <Route path="/news" element={<Latestnews />} />
        <Route path="/news/:id" element={<BlogDetails />} />
          <Route path="/about-us" element={<AboutUs />} />
          {/* <Route path='/shop/categories/:category' element={<kk/>}/> */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/shopdetails/:id"
            element={<ShopDetails addToCart={addToCart} />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/featuredbrands" element={<FeatureddBrand />} />
          <Route path="/error/404" element={<ErrorPage />} />
          <Route path='/admin/create-product/:id' element={<CreatePost />} />
          <Route path="/admin/create-product" element={<CreatePost />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
