import React from 'react'
import './featuredproductcard.css'
import Chicken from '../../assets/products30-min.jpg'
import FeaturedBrand1 from '../../assets/brand-thumb-1.png'
import { FaRegStar } from "react-icons/fa6";
import BrandPost from './BrandPost';


const Featuredproductcard = ({brandproductId, src, featured__product__name, featured__price, featured_update_price, featured_update_discount }) => {

  return (
    <div className="feauturedBrands__c">
        <div className="featured__card"  key={brandproductId}>     
            <img className='product__featured__image' src={src} alt="" />

            <div className="featured__product__details ">
                <h4 className='featured__product__name'>{featured__product__name}</h4>
                <div className='featured__grading'>
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                </div>
                <span className='featured__price'>
                ${featured__price}
                    <small>${featured_update_price}</small>
                </span>


                <div className={`featuured__hover`} >
                    <div className="featured__brand__positioning">
                        <div className="featured__left__positioning">
                            <span> {featured_update_discount}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Featuredproductcard