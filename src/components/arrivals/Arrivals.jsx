import React from 'react'
import { LuChevronRight } from "react-icons/lu";
import './arrivals.css'
import Card from '../card/Card';
import BGBanner from './../../assets/tpbanner.jpg'
import Weekly from '../weeklyProducts/Weekly';
import ProductCartHead from '../productCartHead/ProductCartHead';
import ProductCard from '../card/ProductCard';
import { cardData } from './ArrivalsData';

const Arrivals = () => {
  return (
    <div className="new__arrival__section">
         <div className="new__arrival__head">
            <ProductCartHead heading={"New Arrivals"} heading2={"Features"} heading3={"Best Rate"}/>
        </div>


        
        <div className="weekly__products">
        <div className="card__section">
      {cardData.map((cardData) =>(
        <ProductCard cardData={cardData}/>  
      ))}
   </div>
        </div>
    </div>
  )
}

export default Arrivals