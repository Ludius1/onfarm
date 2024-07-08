import React from 'react'
import { LuChevronRight } from "react-icons/lu";
import './arrivals.css'
import Card from '../card/Card';
import { useState } from 'react';
import BGBanner from './../../assets/tpbanner.jpg'
import Weekly from '../weeklyProducts/Weekly';
import ProductCartHead from '../productCartHead/ProductCartHead';
import ProductCard from '../card/ProductCard';
import { CardDataArrival } from './ArrivalsData';

const Arrivals = () => {
  const [products, setProducts] = useState(CardDataArrival)
  return (
    <div className="new__arrival__section">
         <div className="new__arrival__head">
            <ProductCartHead heading={"New Arrivals"} heading2={"Features"} heading3={"Best Rate"}/>
        </div>


        
        <div className="card__viewproducts">
            {products.map(({id, src, product__category, old__price, product__name, shop, NumberLeft, price, badge, type, mfg, desc, life__span}) =>(
              <ProductCard key={id} src={src} product__name={product__name} shop={shop} NumberLeft={NumberLeft} ProductId={id} price={price} old__price={old__price} product__category={product__category} desc={desc} badge={badge} type={type} mfg={mfg} life__span={life__span}/>  
             ))}
        </div>
    </div>
  )
}

export default Arrivals