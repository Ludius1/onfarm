import React, { useState } from 'react'
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
import { useContext } from 'react'
import { isLoggedIn } from '../../../AppContext';
import { useRef } from 'react'

const Nav = () => {
      // const [isMouseOver, setIsMouseOver] = useState(false)
      const [BlogisMouseOver, setBlogIsMouseOver] = useState(false)
      const [openCart, setopenCart] = useState('')
      const [userOption, setuserOption] = useState(false)
      const navigateTo = useNavigate();
      const [isDropDownopen, setdDropDownopen] = useState(false);
      const [isLoggedin, setIsLoggedin] = useState(false); // Adjust the initial state based on your logic
      const userOptionRef = useRef(null);

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
                  <img src={Logo} alt="" className="logo" />
              </div>

              <div className="middle__nav">

                <Link to='/'> Home</Link>
                <Link to='/shop' className='Shop__'> Shop</Link>
                <Link to='/blog' className='Blog__' > Blog</Link>
                <Link to='/faqs'> FAQs</Link>
                <Link to='/about-us'> About Us</Link>
                <Link to='/'> Contact Us</Link>
                            
              </div>
            <div className="nav__icon__sec">
                  <span className="nav__icons" onClick={() => setsearchOpen(!issearchOpen)}> <CiSearch /></span>
                  <Link  onClick={() => setuserOption(!userOption)} className="nav__icons"> <CiUser /></Link> 
                  <span> <Link   className="nav__icons" to='/wishlist'> <CiHeart /></Link> </span>
                  
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
                          <span className='search__input__span'>
                            <input className="searchimput" type="" placeholder='Search for Products...' />
                            <CiSearch className='seach__icon' />
                            </span>  
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
                        <div className="each__cart">
                            <img src={Cart} alt="" />
                            <span className="cart__desc">
                                <span className="cart__title">Stacy's Pita Chips Parmesan Garlic & Herb From Nature</span>
                                <span>
                                  <small>1 x</small> 
                                  <span> $162.80</span>
                                  </span>
                            </span>

                            <small><MdOutlineCancel className="delete"/></small>
                        </div>
                    </div>


                   <div className="down__cart">
                      <div className="cart__calc">
                            <span className="total">
                                SUBTOTAL:
                                <small>$300.00</small>
                            </span>
                            <button className="view__cart">VIEW CART</button>
                            <button className="checkout">CHECKOUT</button>
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