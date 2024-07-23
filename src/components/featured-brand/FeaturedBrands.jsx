import React from 'react'
import './../weeklyProducts/weekly.css'
import './featuredBrand.css'
import Chicken from '../../assets/products30-min.jpg'
import FeaturedBrand1 from '../../assets/brand-thumb-1.png'
import Featuredproductcard from '../featuredproductcard/Featuredproductcard';
import Section_header from '../section_header/Section_header';
import { useState } from 'react';
import BrandPost from '../featuredproductcard/BrandPost'

const FeaturedBrands = () => {
    const CardBrandFeature = [
        {brandproductId: 1,  src:Chicken, FeaturedBrand_img: FeaturedBrand1, featured__product__name: 'Mangosteen Organic From VietNamese', featured__price: 56.00, featured_update_price: 19.00, featured_update_discount: '-50%'  },
        {brandproductId: 2, src:Chicken, FeaturedBrand_img: FeaturedBrand1,  featured__product__name: 'Mangosteen Organic From VietNamese', featured__price: 56.00, featured_update_price: 19.00, featured_update_discount: '-50%'  },
        {brandproductId: 3, src:Chicken, FeaturedBrand_img: FeaturedBrand1,  featured__product__name: 'Mangosteen Organic From VietNamese', featured__price: 56.00, FeaturedBrand_img: FeaturedBrand1,  featured_update_price: 19.00, featured_update_discount: '-50%'  },
        {brandproductId: 4, FeaturedBrand_img: FeaturedBrand1,  src:Chicken, featured__product__name: 'Mangosteen Organic From VietNamese', featured__price: 56.00, featured_update_price: 19.00, featured_update_discount: '-50%'  },
        {brandproductId: 5, FeaturedBrand_img: FeaturedBrand1,  src:Chicken, featured__product__name: 'Mangosteen Organic From VietNamese', featured__price: 56.00, featured_update_price: 19.00, featured_update_discount: '-50%'  },
        {brandproductId: 6, src:Chicken, FeaturedBrand_img: FeaturedBrand1,  featured__product__name: 'Mangosteen Organic From VietNamese', featured__price: 56.00, FeaturedBrand_img: FeaturedBrand1,  featured_update_price: 19.00, featured_update_discount: '-50%'  },
    ]

    const BrandPosts = [
        {brandId: 1, brand__name:'Super Market',  brand__desc:'Nam liber tempor cum soluta nobis eleifend congue doming quod mazim placerat facer possim assum typi.',brandSrc:FeaturedBrand1}
    ]
    const [featuredProducts, setfeaturedProducts] = useState(CardBrandFeature)
    const [BrandPosted, setBrandPosted] = useState(BrandPosts)


    return (
        <div className="featuredBrands">
            <Section_header all__section__head={"Featured Brand"}/>

            <div className="feauturedBrands__cont">

                <div className="img__feat">
                {BrandPosted.map(({brandId, brand__name, brandSrc, brand__desc}) =>(
                <BrandPost key={brandId} brand__name={brand__name} brandSrc={brandSrc} brand__desc={brand__desc}  />  
                            ))}
                </div>

                <div className="featured__productt" key={CardBrandFeature.brandproductId}>
                        {featuredProducts.map(({brandId,brand__name, src, brand__desc, brandSrc, featured__product__name, featured__price, featured_update_price, featured_update_discount}) =>(
                        <Featuredproductcard key={brandId} src={src} brand__name={brand__name} brand__desc={brand__desc} brandSrc={brandSrc} featured__product__name={featured__product__name} featured_update_discount={featured_update_discount} featured__price={featured__price} featured_update_price={featured_update_price} />  
                            ))}
                </div>
            </div>
        </div>
    )
}

export default FeaturedBrands