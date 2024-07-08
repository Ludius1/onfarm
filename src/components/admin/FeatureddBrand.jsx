import React from 'react'
import FeaturedBrand1 from '../../assets/brand-thumb-1.png'
import { useState } from 'react'

const FeatureddBrand = () => {
    const Thebrandsfeatured = [
        {id: 1, brand__name:'Super Market',  brand__desc:'Nam liber tempor cum soluta nobis eleifend congue doming quod mazim placerat facer possim assum typi.',brandSrc:FeaturedBrand1, products: 6},
        {id: 2, brand__name:'Martrite Market',  brand__desc:'Nam liber tempor cum soluta nobis eleifend congue doming quod mazim placerat facer possim assum typi.',brandSrc:FeaturedBrand1, products: 6}
    ]
    const [brandsFeature, setbrandsFeature] = useState(Thebrandsfeatured)
  return (
    <div className="Signup">
        {/* <h3>Featured Brands</h3>
        {brandsFeature.length > 0 ? 
            <div className="featured__brand" key={brandId}>
            <img src={brandSrc} alt="" />
            <span className="brand__name">{brand__name}</span>
            <small >{brand__desc}</small>
        </div>   
        : <div className="">
                        No featured brands
        </div> 
    } */}
    </div>
  )
}

export default FeatureddBrand