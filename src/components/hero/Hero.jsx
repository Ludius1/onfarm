import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../hero/hero.css';
import HeroSlide1 from '../../assets/slider-bg-w.png';
import HeroSlide2 from '../../assets/slider3-2-mobile.jpg';
import HeroSlide3 from '../../assets/slider-bg-7.png';
import Leave1 from '../../assets/slider-shape-6.png';
import Leave2 from '../../assets/slider-shape-5.png';

export const heroText = [
    { id: 1, category: "TOP DEALS", topic: 'Hot Deals For Health', desc: 'Presentation matters. Our fresh Vietnamese vegetable rolls look good and taste even better', mainImg: HeroSlide3, overlayImg1: Leave1, overlayImg2: Leave2 },
    { id: 2, category: "TOP SELLER IN THE WEEK", topic: 'The Best Health Fresh', desc: 'Presentation matters. Our fresh Vietnamese vegetable rolls look good and taste even better', mainImg: HeroSlide1, overlayImg1: Leave1, overlayImg2: Leave2 }
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % heroText.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(slideInterval); // Clear interval on component unmount
    }, []);

    return (
        <div className="inside__hero">
            {heroText.map((hero, index) => (
                index === currentSlide && (
                    <div className="hero" key={hero.id}>
                        <div className="left__hero__">
                            <span>{hero.category}</span>
                            <div className="title__div">
                                <h1>{hero.topic}</h1>
                            </div>
                            <small>{hero.desc}</small>
                            <Link to='/shop'>
                                <button className='hero__btn'>SHOP NOW</button>
                            </Link>
                        </div>
                        <div className="right__hero">
                            <img className='main__hero__img' src={hero.mainImg} alt="" />
                            <img className='leave1' src={hero.overlayImg1} alt="" />
                            <img src={hero.overlayImg2} alt="" className='Leave2' />
                        </div>
                    </div>
                )
            ))}
        </div>
    );
};

export default Hero;
