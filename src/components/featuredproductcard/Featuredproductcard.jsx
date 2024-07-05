import React from 'react'
import './featuredproductcard.css'
import Chicken from '../../assets/products30-min.jpg'
import { FaRegStar } from "react-icons/fa6";

const Featuredproductcard = () => {
  return (
    <div className="featured__card" onMouseOver={() => setisProductShowing(!isProductShowing)}>
    <img className='product__featured__image' src={Chicken} alt="" />

    <div className="featured__product__details">
        <h4 className='featured__product__name'>Mangosteen Organic From VietNamese</h4>
        <div className='featured__grading'>
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
        </div>
        <span className='featured__price'>
            $56.00
            <small>$19.00</small>
        </span>


        <div className={`featuured__hover`} >
            <div className="featured__brand__positioning">
                <div className="featured__left__positioning">
                    <span>-50%</span>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Featuredproductcard