import React from 'react'
import './ads.css'
import { adsData } from './adsData'

const Ads = () => {
  return (
    <div className='ads__boxxx'>
        
        {
        adsData.map((adsData)=> (
            <div className="ads__container" key={adsData.id}>
                <img className='ads__image__bg' src={adsData.src} alt="" />
           
           <small className='ads'>
                <h4>{adsData.offer}</h4>
                <span>{adsData.taste}</span>
                <span>{adsData.tasteDec}</span>
                <small>{adsData.desc}</small>
           </small>
    </div>
        ))
    }
    </div>
  )
}

export default Ads