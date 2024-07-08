import React from 'react'
import {CardData} from './cardData'
import ProductCard from './ProductCard'
import { useState } from 'react'

const Card = () => {
  const [products, setProducts] = useState(CardData)
    
  return (
   <>
    <div className="card__section">
      {/* {products.map(({id, src, product__category, old__price, product__name, shop, NumberLeft, price, badge, type, mfg, desc, life__span}) =>(
        <ProductCard key={id} src={src} product__name={product__name} shop={shop} NumberLeft={NumberLeft} ProductId={id} price={price} old__price={old__price} product__category={product__category} desc={desc} badge={badge} type={type} mfg={mfg} life__span={life__span}/>  
      ))} */}
   </div>
   </>
  )
}

export default Card