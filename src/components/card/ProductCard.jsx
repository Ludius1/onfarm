import React, { Children } from 'react'
import { FaRegStar } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { useState } from 'react';
import { CiHeart } from "react-icons/ci";
import './../card/card.css'
import { Link } from 'react-router-dom';
import {CardData} from './cardData'



const ProductCard = ({cardData, width, padding, backgroundColor, borderRadius, left, display, id, product__category, old__price, desc, src, product__name, shop, NumberLeft, price, badge, type, mfg, life__span  }) => {
    
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
  return (
   <>
        <Link to={`/shopdetails/${id}`}>
        <div className="each__card" style={cardStyle} key={id}>
                <div className="card"  onMouseEnter={() => setisProductShowing(true)} onMouseLeave={() => setisProductShowing(false)}>
            <img className='product__image' src={src} alt="" />
    
            <div className="product__details" style={productstyle}>
                <small className='product__category'>{product__category}</small>
            <h4 className='product__name'>{product__name}</h4>
            <div className='grading'>
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
                </div>
            <span className='price'>
                 ${price}
                <small className='old__price'>${old__price}</small>
            </span>
            <span> <input type="range" className="range" style={range} value="20" min='0' max="100" name="" id="" /></span>
            <span className='No__left'  style={No__left}> Sold:<small> {shop} /{NumberLeft}</small></span>
            
            <div className="positioning">
                    <div className="left__positioning">
                       {desc &&  <span className='desc'>{desc}</span> }
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
                     <button className="add_to__cart">ADD TO CART</button>
                </div>
    
                <span className='products__hover__more__dec'>
                    <small className='type'>Type: {type}</small>
                    <small className='mfg'>MFG: {mfg}</small>
                    <small className='life__span'>Life: {life__span}</small>
                </span>
            </div>

           </span>
            </div>
        </div>
        </div>
        
        </Link>
   </>
  )
}

export default ProductCard