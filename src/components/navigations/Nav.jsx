import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/authContext";
import './nav.css'
import Logo from  '../../../src/assets/Logo.png'
import { navlist, navOtherItems } from './navlist'
import { TbShoppingBagCheck } from "react-icons/tb";
import { FaChevronDown } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import HeroSlide2 from '../../assets/slider3-2-mobile.jpg'
import { MdOutlineCancel } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { RiMenu4Fill } from "react-icons/ri";
import Cart from './../../assets/cart.jpg'
import CancelIcon from '../../assets/cancel-icon.svg'
import { LiaTimesSolid } from "react-icons/lia";
import axios from "axios";
import { toast } from 'sonner';
import { useRef } from 'react'

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
  

  const { token, user } = useContext(AuthContext);

  const headers = {
    authorization: `Bearer ${token}`,
  };
  

  const getCartItems = () => {
    axios
      .get("http://localhost:5000/api/v1/products/cart", { headers })
      .then((response) => {
        setProducts(response.data.cart);
        calculateTotals(response.data.cart); // Calculate totals when cart items are fetched
      })
      .catch((error) => console.error("Error fetching cart items:", error));
  };

  const removeProduct = (productId) => {
    axios
      .delete(`http://localhost:5000/api/v1/products/cart/${productId}`, { headers })
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

      const safeToLowerCase = (str) => {
        if (typeof str === 'string') {
          return str.toLowerCase();
        }
        return '';
      };
      
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
          const response = await axios.get('http://localhost:5000/api/v1/products/search', {
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
    
      // useEffect(() => {
      //   if(token) {
      //     setIsLoggedin(true);
      //   } else {}
        
      // }, []);
    
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
      useEffect(() => {
        if (searchQuery) {
          const filtered = products.filter(product => 
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
          );
          setFilteredProducts(filtered);
        } else {
          setFilteredProducts(products);
        }
      }, [searchQuery, products]);

      const handleclick = (className) => {
        setopenCart(className)
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
              <span className='navv__menu'><RiMenu4Fill /></span>
              <div className="logo__sec">
                 
                  <Link to='/'>  <img src={Logo} alt="" className="logo" /></Link>
              </div>

              <div className="middle__nav">

                <Link to='/'> Home</Link>
                <Link to='/shop' className='Shop__'> Shop</Link>
                <Link to='/blog' className='Blog__' > Blog</Link>
                <Link to='/faqs'> FAQs</Link>
                <Link to='/about-us'> About Us</Link>
                <Link to='/contact-us'> Contact Us</Link>
                            
              </div>
            <div className="nav__icon__sec">
                  <span className="nav__icons" onClick={() => setsearchOpen(!issearchOpen)}> <CiSearch /></span>
                  <Link  onClick={() => setuserOption(!userOption)} className="nav__icons"> <CiUser /></Link> 
                  <span> <Link   className="nav__icons" to='/cart'> <CiHeart /></Link> </span>
                  
                  <span onClick={() => handleclick('displayCart')} className='shoppingbagIcon'>
                    <TbShoppingBagCheck />
                    <small>5</small></span>
            </div>
          </div>

          <div className={`bac__search ${issearchOpen ? 'showHover' : 'nullHover'}` } >
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
          searchResults.length > 0 ? (
            <ul>
              {searchResults.map(product => (
                <li key={product._id}>{product.product__name}</li>
              ))}
            </ul>
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
        {isLoggedin ? (
          <div className='dropq'>
            <Link to='/userprofile'>User Profile</Link>
            <Link to='/login' onClick={logoff}>Signout</Link>
          </div>
        ) : (
          <Link to='/signup'>Signin</Link>
        )}
      </div>
    </div>

{/* 
          <div className={`Shop__hover ${isMouseOver ? 'showHover' : 'nullHover'}`} onMouseLeave={() => setIsMouseOver(false)}>

                  <img src={HeroSlide2} alt="" />
            </div> */}

          <div className={`Blog__hover ${BlogisMouseOver ? 'showHover' : 'nullHover'}`} onMouseLeave={() => setBlogIsMouseOver(false)} >
                  {/* <div className="inside__blog__hover">
                  <div className='shop__hover__cart'>
                    <small>
                    <span> with banner</span>
                    <span>Shop with banner</span>
                    <span>Shop with banner</span>
                    <span>Shop with banner</span>
                    </small>
                  </div>
                  </div> */}
                  
{/* 
                  <img src={HeroSlide2} alt="" /> */}
            </div>


            <div className={`cart__section ${openCart}`}>
                <div className="cart">
                    <span className="cart__header">
                        <small className='sm__header'>
                          <small>YOUR CART</small>
                          <img  className='cancel__cart' src={CancelIcon} alt="" onClick={()=> handleclick('notdisplayCart')} />
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

                            <small><MdOutlineCancel  onClick={() => removeProduct(product.product?.productId?._id)} className="delete"/></small>
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