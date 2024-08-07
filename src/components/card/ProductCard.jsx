import React, { Children } from 'react'
import  { useContext } from "react";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { useState } from 'react';
import { CiHeart } from "react-icons/ci";
import './../card/card.css'
import { Link } from 'react-router-dom';
import { AuthContext } from "../../context/authContext";
import axios from "axios";
import { toast } from 'sonner';



const ProductCard = ({cardData, width, padding, backgroundColor,rating, borderRadius, left, display, id, product__category, old__price, desc, src, product__name, shop, NumberLeft, price, badge, type, mfg, life__span  }) => {
    
    // const formattedPrice = price.toFixed(2);

    const [isProductShowing, setisProductShowing] = useState(false)
    // const shortTitle = product__name.length > 30 ? product__name.substr(0,30) + '...' : product__name

    const cardStyle = {
        width: width
    }
    const productstyle = {
        padding: padding,
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
    }
    const rightPosition = {
        left: left
    }
    const range = {
        display: display
    }
    const No__left = {
        display: display
    }
    const clse= {
        display: display
    }
    const [product, setProduct] = useState({});
    const {token } = useContext(AuthContext)
    const handleAddToCart = () => {
        // const token = localStorage.getItem("authToken"); // Get the token from local storage or wherever it is stored
        console.log(token);
        axios
          .post(
            "https://neworfarm-1.onrender.com/products/cart/add",
            { productId: product._id},
            { headers: { Authorization: `Bearer ${token}` } }
          )
          .then((response) => {
            toast.success(response.data.msg);
            console.log(response.data.message);
          })
          .catch((error) => {
            toast.error(error.message);
            console.error("Error adding to cart:", error);
          })
           
         
      };
  return (
   <>
      
        <div className="each__card" style={cardStyle} key={id}>

                <div className="card"  onMouseEnter={() => setisProductShowing(true)} onMouseLeave={() => setisProductShowing(false)}>
            
            <span className='product_image_section'>
            <Link to={`/shopdetails/${id}`}>
                        <img className='product__image' src={src[0]} alt="" />
                    </Link>
            </span>
    
            <div className="product__details" style={productstyle}>
                <small className='product__category'>{product__category}</small>
            <h4 className='product__name'>{product__name}</h4>
            <div className='grading'>
            {/* <FaRegStar /> */}

            <div className="flex">
            {new Array(5).fill(0).map((_, index) => (
                                        <FaRegStar
                                            key={index}
                    className={`${
                        index <= {rating} - 1 && "text-[#FFAD33] opacity-100"
                    }  text-[20px] text-white opacity-25`}
                    />
                ))}
        </div>

            </div>
            <span className='price'> 
                <strong>${price}.00</strong>
                <small className='old__price'>${old__price}.00</small>
            </span>
            <span> <input type="range" className="range" style={range} value={shop} min='1' max={No__left} name="" id="" /></span>
            <span className='No__left'  style={No__left}> Sold:<small> {shop} /{NumberLeft}</small></span>
            
            <div className="positioning">
                    <div className="left__positioning">
                       {desc &&  <span className='desc'>{desc}%</span> }
                      {badge &&  <small  className='badge'>{badge}</small>}
                    </div>
            </div>
    
    
           <span className='clse' style={clse}>
           <div className={`hover ? ${isProductShowing ? 'showhover' : 'nullhover' }`} onMouseLeave={() => setisProductShowing('')}>
                <div className="positioning">
                        <div className="right__positioning">
                            <span><CiHeart /></span>
                            <span><IoEyeOutline /></span>
        
                        </div>
                </div>
                <div className="hover__btn">
                {/* <Link to={`/shopdetails/${id}`}> */}
                                        <button  onClick={handleAddToCart} className="add_to__cart">ADD TO CART</button>
                                    
                                    </div>
                                    
    
                <span className='products__hover__more__dec'>
                    <small className= 'type'>Type: {type}</small>
                    <small className='mfg'>MFG: {mfg}</small>
                    <small className='life__span'>LIFE: {life__span} days</small>
                </span>
            </div>

           </span>
            </div>
        </div>
        </div>

   </>
  )
}

export default ProductCard