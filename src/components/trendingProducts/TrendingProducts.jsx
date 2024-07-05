import React from 'react'
import Weekly from '../weeklyProducts/Weekly'
import ProductCartHead from '../productCartHead/ProductCartHead'
import './../trendingProducts/trendingProducts.css'
import { cardData } from './TredninfProductsData'
import ProductCard from '../card/ProductCard'

const TrendingProducts = () => {
  return (
    <div className="trending__product__cont">
        <div className="Trending__products__container">
        <ProductCartHead heading= {'Top Trending Products'}/>
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

export default TrendingProducts