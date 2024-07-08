import React from 'react'
import Weekly from '../weeklyProducts/Weekly'
import ProductCartHead from '../productCartHead/ProductCartHead'
import './../trendingProducts/trendingProducts.css'
import { CardDataTrending } from './TredninfProductsData'
import { useState } from 'react';
import ProductCard from '../card/ProductCard'

const TrendingProducts = () => {
  const [products, setProducts] = useState(CardDataTrending)
  return (
    <div className="trending__product__cont">
        <div className="Trending__products__container">
        <ProductCartHead heading= {'Top Trending Products'}/>
    </div>

    <div className="card__viewproducts">
            {products.map(({id, src, product__category, old__price, product__name, shop, NumberLeft, price, badge, type, mfg, desc, life__span}) =>(
              <ProductCard key={id} src={src} product__name={product__name} shop={shop} NumberLeft={NumberLeft} ProductId={id} price={price} old__price={old__price} product__category={product__category} desc={desc} badge={badge} type={type} mfg={mfg} life__span={life__span}/>  
             ))}
        </div>
    </div>
    
  )
}

export default TrendingProducts