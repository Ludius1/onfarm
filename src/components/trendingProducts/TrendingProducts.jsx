import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ProductCartHead from '../productCartHead/ProductCartHead'
import './../trendingProducts/trendingProducts.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../card/ProductCard'

const TrendingProducts = () => {
  const [products, setProducts] = useState([])
      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchProducts = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/api/v1/products/weekly-products`);
            console.log(response)
            setProducts(response.data);
        } catch (error) {
            console.error('Failed to fetch products:', error);
        }
    };

    fetchProducts();
}, []);
  return (
    // <div className="trending__product__cont">
    //     <div className="Trending__products__container">
    //     <ProductCartHead heading= {'Top Trending Products'}/>
    // </div>

    // <div className="card__viewproducts">
    //     <Carousel 
    //       showArrows={false}
    //       showStatus={false}
    //       showIndicators={false}
    //       infiniteLoop = {true}
    //       useKeyboardArrows
    //       autoPlay = {true}
    //       interval={5000}
    //         transitionTime={600}
    //         emulateTouch={true}
    //       centerMode
    //       centerSlidePercentage={20} // Adjust this percentage based on how many cards you want to show at a time
    //     >
    //       {products.map(product => {
    //         const {
    //           _id, 
    //           prdDetailsId: { src = [""] },
    //           prdCategoryId: { product__category = '' } = {},
    //           prdSectionId: { product__section = '' } = {}, 
    //           old__price = '', 
    //           desc = '', 
    //           product__name = '', 
    //           shop = '', 
    //           NumberLeft = '', 
    //           price = '', 
    //           badge = '', 
    //           type = '', 
    //           mfg = '', 
    //           life__span = '', 
    //           ratings = 0
    //         } = product;

    //         return (
    //           <div key={_id} className="carousel__item">
    //             <ProductCard 
    //               id={_id} 
    //               src={src}
    //               product__category={product__category}
    //               product__section={product__section}
    //               old__price={old__price}
    //               desc={desc}
    //               product__name={product__name}
    //               shop={shop}
    //               NumberLeft={NumberLeft}
    //               price={price}
    //               badge={badge}
    //               type={type}
    //               mfg={mfg}
    //               life__span={life__span}
    //               ratings={ratings}
    //             />
    //           </div>
    //         );
    //       })}
    //     </Carousel>
    //   </div>
    // </div>
    
    <div className="weekly">
    <div className="">
      <ProductCartHead heading={"Top Trending Products"} />
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
  )
}

export default TrendingProducts