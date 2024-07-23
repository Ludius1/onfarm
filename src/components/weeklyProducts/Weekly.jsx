import React from 'react'
import './weekly.css'
import { CardDataWeekly } from './WeeklycardData';
import ProductCard from './../card/ProductCard'
import Card from '../card/Card';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCartHead from '../productCartHead/ProductCartHead';

const Weekly = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/v1/products/weekly-products');
            console.log(response)
            setProducts(response.data);
        } catch (error) {
            console.error('Failed to fetch products:', error);
        }
    };

    fetchProducts();
}, []);
  return (
    <div className="weekly">
        <div className="">
          <ProductCartHead heading={"Weekly Food Offers"} />
        </div>

        <div className="card__viewproducts">
        {products.map(product => {
                const {
                    _id,  prdDetailsId: {src= src[0]}, prdCategoryId: { product__category = '' } = {}, prdSectionId: { product__section = '' } = {}, old__price = '', desc = '', product__name = '', shop = '', NumberLeft = '', price = '', badge = '', type = '', mfg = '', life__span = '', ratings = 0
                } = product;
                return (
                    <ProductCard 
                        key={_id} 
                        id={_id}
                        src={src}
                        product__category={product__category}
                        product__section={product__section}
                        old__price={old__price}
                        desc={desc}
                        product__name={product__name}
                        shop={shop}
                        NumberLeft={NumberLeft}
                        price={price}
                        badge={badge}
                        type={type}
                        mfg={mfg}
                        life__span={life__span}
                        ratings={ratings}
                    />
                );
            })}
             
        </div>
    </div>
  )
}

export default Weekly