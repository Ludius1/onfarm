import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/authContext";
import './nav.css'
import Logo from '../../../src/assets/Logo.png'
import { navlist, navOtherItems } from './navlist'
import { TbShoppingBagCheck } from "react-icons/tb";
import { FaChevronDown } from "react-icons/fa";
import { TiTimes } from "react-icons/ti";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import HeroSlide2 from '../../assets/slider3-2-mobile.jpg'
import { MdOutlineCancel } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { RiLoginCircleLine, RiMenu4Fill } from "react-icons/ri";
import Cart from './../../assets/cart.jpg'
import CancelIcon from '../../assets/cancel-icon.svg'
import { LiaTimesSolid } from "react-icons/lia";
import axios from "axios";
import { toast } from 'sonner';
import { useRef } from 'react'
import { FiUser } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import { PiUserCirclePlus } from "react-icons/pi";
import ProductCard from "../card/ProductCard";

const Nav = () => {
  // const [isMouseOver, setIsMouseOver] = useState(false)
  const [BlogisMouseOver, setBlogIsMouseOver] = useState(false)
  const [filteredProducts, setFilteredProducts] = useState([])
  const [openCart, setopenCart] = useState('')
  const [userOption, setuserOption] = useState(false)
  const navigateTo = useNavigate();
  const [isDropDownopen, setdDropDownopen] = useState(false);
  const [isLoggedin, setIsLoggedin] = useState(false); // Adjust the initial state based on your logic
  const userOptionRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize naviga
  const [products, setProducts] = useState([]);
  const [cartTotals, setCartTotals] = useState({ subtotal: 0, total: 0 });
  const [reload, setReload] = useState(false);
  const [openMobileNav, setOpenMobileNav] = useState(false);
  const [totalProducts, setTotalProducts] = useState(0);
      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;



  const handleLinkClick = () => {
    setOpenMobileNav(false);
  };


  const { token, user, logout } = useContext(AuthContext);

  const headers = {
    authorization: `Bearer ${token}`,
  };


  const getCartItems = () => {
    axios
      .get(`${API_BASE_URL}/api/v1/products/cart`, { headers })
      .then((response) => {
        setProducts(response.data.cart);
        calculateTotals(response.data.cart); // Calculate totals when cart items are fetched
        setTotalProducts(response.data.cart.length); // Set total number of products
        console.log(response.data.cart);
      })
      .catch((error) => console.error("Error fetching cart items:", error));
  };

  const removeProduct = (productId) => {
    axios
      .delete(`${API_BASE_URL}/api/v1/products/cart/${productId}`, { headers })
      .then((response) => {
        toast.success(response.data.message);
        setReload(!reload);
      })
      .catch((error) => {
        console.error("Error deleting product from cart:", error);
        if (error.response) {
          toast.error(error.response.data.message);
        } else {
          toast.error('Server error');
        }
      });
  };


  useEffect(() => {
    getCartItems();
  }, [reload]);

  const calculateTotals = (items) => {
    const subtotal = items.reduce(
      (sum, product) => sum + product.product?.productId?.price * product?.product?.quantity,
      0
    );
    setCartTotals({ subtotal, total: subtotal });
  };

  // const safeToLowerCase = (str) => {
  //   if (typeof str === 'string') {
  //     return str.toLowerCase();
  //   }
  //   return '';
  // };

  // if(token) {
  //   setIsLoggedin(true);
  // } else {}


  // const handleSearchSubmit = () => {
  //   const query = safeToLowerCase(searchQuery); // Default to an empty string if searchQuery is undefined
  //   navigate(`/shop?search=${query.toLowerCase()}`);

  // };


  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const response = await axios.get(`${API_BASE_URL}/api/v1/products/search`, {
        params: { query: searchQuery }
      });

      setProducts(response.data);
      console.log(response)
      console.log(response.data)

      toast.success('Products fetched successfully');
    } catch (error) {
      console.error('Error searching products:', error);
      toast.error('Failed to fetch products');
    }

    setLoading(false);
  };

  const handleClickOutside = (event) => {
    setuserOption(false);
  };


  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  const logoff = () => {
    setIsLoggedin(false);
    navigateTo('/login')
  };
  // useEffect(() => { 
  //   if (searchQuery) {
  //     const filtered = products.filter(product =>
  //       product.name.toLowerCase().includes(searchQuery.toLowerCase())
  //     );
  //     setFilteredProducts(filtered);
  //   } else {
  //     setFilteredProducts(products);
  //   }
  // }, [searchQuery, products]);

  const handleclick = (className) => {
    setopenCart(className)
    getCartItems();
  }
  const [issearchOpen, setsearchOpen] = useState(false)



  const engRef = useRef(null)
  // console.log(usdRef)
  const OutsideClick = (refState, ref) => {
    if (ref.current && !ref.current.contains(event.target)) {
      // console.log("Outside click ")
      refState(false)

    }
  }

  useEffect(() => {
    document.addEventListener('click', () => OutsideClick(setdDropDownopen, engRef))

    return () => {
      document.removeEventListener('click', () => OutsideClick(setdDropDownopen, engRef))
    }
  }, [])

  return (
    <>
      <div className="nav__sec">
        <div id='nav' >
          <span className='navv__menu'>
            <RiMenu4Fill onClick={() => setOpenMobileNav(true)} />
          </span>
          <div className="logo__sec">

            <Link to='/'>  <img src={Logo} alt="" className="logo" /></Link>
          </div>


          {/* Desktop Navigation */}
          <div className="middle__nav desktop__nav">
            <Link className="linkk" to='/' onClick={handleLinkClick}>Home</Link>
            <Link to='/shop' onClick={handleLinkClick} className='Shop__linkk linkk'>Shop</Link>
            <Link to='/blog' onClick={handleLinkClick} className='Blog__linkk linkk'>Blog</Link>
            <Link className="linkk" to='/faqs' onClick={handleLinkClick}>FAQs</Link>
            <Link className="linkk" to='/about-us' onClick={handleLinkClick}>About Us</Link>
            <Link className="linkk" to='/contact-us' onClick={handleLinkClick}>Contact Us</Link>
            <Link className="linkk lonk--mobil" to='/login' onClick={handleLinkClick}>Login / Register</Link>
            <Link className="linkk lonk--mobil" to='/signup' onClick={handleLinkClick}>Signup</Link>

          </div>

          {/* Mobile Navigation */}
          <div className={` mobile__nav ${openMobileNav ? 'showHover' : 'nullHover'}`}>
            <span className="close__smalll" onClick={handleLinkClick}>
              <small>CLOSE</small>
              <span><TiTimes className="tikmtre" /></span>
            </span>
            <Link className="linkk" to='/' onClick={handleLinkClick}> Home</Link>
            <Link to='/shop' onClick={handleLinkClick} className='Shop__linkk linkk'>Shop</Link>
            {/* <Link to='/blog' onClick={handleLinkClick} className='Blog__linkk linkk'>Blog</Link> */}
            <Link className="linkk" to='/faqs' onClick={handleLinkClick}>FAQs</Link>
            <Link className="linkk" to='/about-us' onClick={handleLinkClick}>About Us</Link>
            <Link className="linkk" to='/contact-us' onClick={handleLinkClick}>Contact Us</Link>

            {token ? (
              <div className="">
                <Link className="linkk lonk--mobil ijia" onClick={handleLinkClick} to='/userprofile'>User Profile</Link>
                <span onClick={handleLinkClick} >
                  <Link className="linkk lonk--mobil ijia" onClick={logout} to='/'>Signout</Link>
                </span>

              </div>
            ) : (


              <div className=''>

                <Link className="linkk lonk--mobil ijia" to='/login' onClick={handleLinkClick}> <span>< FaRegUser className="tikmtre" /></span> Login</Link>
                <Link className="linkk lonk--mobil ijia" to='/signup' onClick={handleLinkClick}> <span>< PiUserCirclePlus className="tikmtres" /></span> <span>Signup</span></Link>
              </div>
            )}




          </div>



          <div className="nav__icon__sec">
            <span className="nav__icons" onClick={() => setsearchOpen(!issearchOpen)}> <CiSearch /></span>
            <Link onClick={() => setuserOption(!userOption)} className="nav__icons"> <CiUser /></Link>
            <span> <Link className="nav__icons" to='/cart'> <CiHeart /></Link> </span>

            <span onClick={() => handleclick('displayCart')} className='shoppingbagIcon'>
              <TbShoppingBagCheck />
              <small>{totalProducts}  </small></span>
          </div>
        </div>

        <div className={`bac__search ${issearchOpen ? 'showHover' : 'nullHover'}`} >
          <div className=" search__sec">
            <span className="inside__seaech__sec">
              <small onClick={() => setsearchOpen(!issearchOpen)}>
                <LiaTimesSolid />
              </small>
              <div className="search__input__section">
                <h4>WHAT ARE YOU LOOKING FOR?</h4>
                <form onSubmit={handleSearchSubmit}>
                  <span className='search__input__span'>
                    <input
                      className="searchimput"
                      type="text"
                      placeholder='Search for Products...'
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <CiSearch className='seach__icon' />
                  </span>
                </form>

                {/* Display search results */}
                <div className="search-results">
              {loading ? (
                <p>Loading...</p>
              ) : (
                products.length > 0 ? (
                  <div className="product--list">
                    {products.map((product) => (
                      <div key={product._id} className="product--card">
                         <Link to={`/shopdetails/`}>
                        {/* <img className='product__image' src={src[0]} alt="" /> */}
                        <img src={product.prdDetailsId?.src[0]} alt={product.product__name} />
                    </Link>

                        <span>
                        <h3>{product.product__name}</h3>
                        {/* <p>{product.desc}</p>
                        <p>Category: {product.prdCategoryId?.product__category}</p>
                        <p>Price: ${product.price}</p>
                        <p>Old Price: ${product.old__price}</p>
                        <p>Shop: {product.shop}</p>
                        <p>Number Left: {product.NumberLeft}</p>
                        <p>Type: {product.type}</p>
                        <p>Manufactured: {product.mfg}</p>
                        <p>Life Span: {product.life__span}</p>
                        <p>Ratings: {product.ratings}</p>
                        <span className="badge">{product.badge}</span> */}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p></p>
                )
              )}
            </div>
     
      
              </div>

             
            </span>

              
          </div>
       
        </div>

        <div ref={userOptionRef} className={`${userOption ? 'showUserOptionHover' : 'nullUserOptionHover'}`}>
          <div onClick={() => setdDropDownopen(!isDropDownopen)}>
            {token ? (
              <div className='dropq'>
                <Link to='/userprofile'>User Profile</Link>
                <Link onClick={logout} to='/'>Signout</Link>
              </div>
            ) : (
              <Link to='/signup'>Signin</Link>
            )}

          </div>
        </div>


        <div className={`Blog__hover ${BlogisMouseOver ? 'showHover' : 'nullHover'}`} onMouseLeave={() => setBlogIsMouseOver(false)} >
        </div>


        <div className={`cart__section ${openCart}`}>
          <div className="cart">
            <span className="cart__header">
              <small className='sm__header'>
                <small>YOUR CART</small>
                <img className='cancel__cart' src={CancelIcon} alt="" onClick={() => handleclick('notdisplayCart')} />
              </small>
            </span>

            <div className="cart__list">
              {products?.map((product) => (
                <div className="each__cart">
                  <img src={product?.product?.productId?.prdDetailsId?.src[0]} alt="" />
                  <span className="cart__desc">
                    <span className="cart__title">{product?.product?.productId?.product__name}</span>
                    <span>
                      <small>{product?.product?.quantity} x</small>
                      <span> ${product.product?.productId?.price * product?.product?.quantity}</span>
                    </span>
                  </span>

                  <small><MdOutlineCancel onClick={() => removeProduct(product.product?.productId?._id)} className="delete" /></small>
                </div>
              ))}
            </div>


            <div className="down__cart">
              <div className="cart__calc">
                <span className="total">
                  SUBTOTAL:
                  <small>${cartTotals.total}.00</small>
                </span>

                <Link to='/cart'>   <button className="view__cart">VIEW CART</button></Link>
                <Link to='/checkout'>     <button className="checkout">CHECKOUT</button></Link>

              </div>
            </div>
            <span className='cart__promo'>Free shipping for orders <small>UNDER 10KM</small></span>
          </div>

        </div>





      </div>
    </>
  )
}

export default Nav