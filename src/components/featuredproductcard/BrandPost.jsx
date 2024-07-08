import React from 'react'


const BrandPost = ({brandId, brand__name, brandSrc, brand__desc}) => {
    
  return (
    <div className="featured__brand" key={brandId}>
            <img src={brandSrc} alt="" />
            <span className="brand__name">{brand__name}</span>
            <small >{brand__desc}</small>
        </div>
  )
}

export default BrandPost