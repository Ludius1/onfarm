import React from 'react'
import './features.css'
import { otherdata } from './otherdata'
import Weekly from '../weeklyProducts/Weekly';
import Arrivals from '../arrivals/Arrivals';
import FeaturedBrands from '../featured-brand/FeaturedBrands';
import Tpbanner from '../tpbanner/Tpbanner';
import Ads from '../ads/Ads';
import TrendingProducts from '../trendingProducts/TrendingProducts';

const Features = () => {
  return (
    <div className="feature">
        <div className="other" >
             <div className="other__container">
        {otherdata.map((otherdata)=> (
            <div className="features"  key={otherdata.id}>
            <span>
                <img src={otherdata.src} alt="" className='ims--' />
            </span>
            <h6>{otherdata.head}</h6>
            <small>{otherdata.dec}</small>
        </div>
        ))}
            </div>
                  
        </div>
        <Weekly />
        <Ads/>
        <Arrivals/>
        <TrendingProducts/>
        <Tpbanner/>
        <FeaturedBrands/>
    </div>
  )
}

export default Features