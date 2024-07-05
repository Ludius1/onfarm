import React from 'react'
import '../hero/hero.css'
import HeroSlide1 from '../../assets/slider3-1-mobile.jpg'
import HeroSlide2 from '../../assets/slider3-2-mobile.jpg'
import HeroSlide3 from '../../assets/slider-bg-7.png'
import Leave1 from '../../assets/slider-shape-6.png'
import Leave2 from '../../assets/slider-shape-5.png'
import { heroText } from './herodata'
import { otherdata } from '../navigations/otherdata'
import { Link } from 'react-router-dom'


const Hero = () => {
  return (
    <div className="inside__hero">
        <div className="hero">
        {heroText.map((heroText)=>(
            <div className="left__hero__" key={heroText.id}>
                <span>{heroText.category}</span>
                
                <div className="title__div">
                <h1>{heroText.topic}</h1>
                </div>
                <small>{heroText.desc}</small>
                <Link to='/shop'> <button className='hero__btn'>SHOP NOW</button></Link>
        </div>
        ))}
        

        <div className="right__hero">
            <img className='main__hero__img' src={HeroSlide3} alt="" />
            <img  className='leave1'  src={Leave1} alt=""/>
            <img src={Leave2} alt="" className='Leave2' />
        </div>
    </div>

    </div>
  )
}

export default Hero