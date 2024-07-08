import React from 'react'
import './weekly.css'
import { CardDataWeekly } from './WeeklycardData';
import ProductCard from './../card/ProductCard'
import Card from '../card/Card';
import { useState } from 'react';
import ProductCartHead from '../productCartHead/ProductCartHead';

const Weekly = () => {
  const [products, setProducts] = useState(CardDataWeekly)
  return (
    <div className="weekly">
        <div className="">
          <ProductCartHead heading={"Weekly Food Offers"} />
        </div>

        <div className="card__viewproducts">
            {products.map(({id, src, product__category, old__price, product__name, shop, NumberLeft, price, badge, type, mfg, desc, life__span}) =>(
              <ProductCard key={id} src={src} product__name={product__name} shop={shop} NumberLeft={NumberLeft} ProductId={id} price={price} old__price={old__price} product__category={product__category} desc={desc} badge={badge} type={type} mfg={mfg} life__span={life__span}/>  
             ))}
        </div>
    </div>
  )
}

export default Weekly