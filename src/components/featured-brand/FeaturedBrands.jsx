import React from 'react'
import './../weeklyProducts/weekly.css'
import './featuredBrand.css'
import FeaturedBrand1 from '../../assets/brand-thumb-1.png'
import Featuredproductcard from '../featuredproductcard/Featuredproductcard';
import Section_header from '../section_header/Section_header';

const FeaturedBrands = () => {
    return (
        <div className="featuredBrands">
            <Section_header all__section__head={"Featured Brand"}/>

            <div className="feauturedBrands__cont">
                <div className="featured__brand">
                    <img src={FeaturedBrand1} alt="" />
                    <span className="brand__name">Super Market</span>
                    <small >Nam liber tempor cum soluta nobis eleifend congue doming quod mazim placerat facer possim assum typi.</small>
                </div>

                <div className="featured__products__cont">

                    <div className="featured__productt">
                        <Featuredproductcard/>
                        <Featuredproductcard/>
                        <Featuredproductcard/>
                        <Featuredproductcard/>
                        <Featuredproductcard/>
                        <Featuredproductcard/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedBrands