import React, { useState, useEffect } from 'react';
import './weekly.css';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ProductCard from './../card/ProductCard';
import ProductCartHead from '../productCartHead/ProductCartHead';

const Weekly = () => {
  const [products, setProducts] = useState([]);
    // const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || '${API_BASE_URL}';
  // console.log('API_BASE_URL:', (API_BASE_URL) )
  // console.log('hjgxsjch ch\  lorrem10  Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, autem.')


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/v1/products/weekly-products`);
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
        <ProductCartHead heading={"Weekly Food Offers "} />
      </div>
      <div className="card__viewproducts">
    
    
          {products.map(product => {
            const {
              _id, 
              prdDetailsId: { src = [""] },
              prdCategoryId: { product__category = '' } = {},
              prdSectionId: { product__section = '' } = {}, 
              old__price = '', 
              desc = '', 
              product__name = '', 
              shop = '', 
              NumberLeft = '', 
              price = '', 
              badge = '', 
              type = '', 
              mfg = '', 
              life__span = '', 
              ratings = 0
            } = product;

            return (
              <div key={_id} className="carousel__item">
                <ProductCard 
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
              </div>
            );
          })}
  
      </div>
    </div>
  );
};

export default Weekly;
