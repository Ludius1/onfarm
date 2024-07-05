import React from 'react'
import './weekly.css'
import { cardData } from './WeeklycardData';
import ProductCard from './../card/ProductCard'
import Card from '../card/Card';
import ProductCartHead from '../productCartHead/ProductCartHead';

const Weekly = () => {
  return (
    <div className="weekly">
        <div className="">
          <ProductCartHead heading={"Weekly Food Offers"} />
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

export default Weekly