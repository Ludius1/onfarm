import React from 'react'
import './weekly.css'
import { CardDataWeekly } from './WeeklycardData';
import ProductCard from './../card/ProductCard'
import Card from '../card/Card';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel'; // You can use any carousel library
import 'react-responsive-carousel/lib/styles/carousel.min.css';
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
        <Carousel 
            showArrows={true}
            showThumbs={false}       // Hide thumbnail indicators
            showStatus={false}       // Hide the status (e.g., "1 of 5")
            showIndicators={false}   // Hide the dots
            infiniteLoop={true}
            autoPlay={true}
            interval={5000}          // Adjust this to set slide interval
            transitionTime={600}     // Adjust this to set transition time
            centerMode={true}        // Optional: centers the active slide
            centerSlidePercentage={20} // Each slide takes 20% of the width (5 slides at a time)
            emulateTouch={true}      // Optional: enable touch support
        >
            {products.map(product => {
                const {
                    _id, 
                    prdDetailsId: { src = [""], },
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
                    <div key={_id} className="carousel-slide">
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
        </Carousel>
        </div>
    </div>
  )
}

export default Weekly