import React from 'react'
import './aboutUs.css'
import AboutImg from  '../../../src/assets/about-inner-bg.png'
import Aboutbac from  '../../../src/assets/about-1.png'
import Aboutbac1 from  '../../../src/assets/about-2.png'
import Aboutbac2 from  '../../../src/assets/about-3.png'
import About1 from  '../../../src/assets/about-svg1.svg'
import About2 from  '../../../src/assets/about-svg2.svg'
import About3 from  '../../../src/assets/about-svg3.svg'
import { TiTick } from "react-icons/ti";



const AboutUs = () => {
  return (
    <div className='abiutus'>
           <div className='main-abouyts'>   
                <img src={AboutImg} alt="" />

                <div className="right-about">
                    <span className="head--">
                        <small>ABOUT US</small>
                        <span>WELCOME TO ORFARM</span>
                    </span>

                    <div className="onsome">
                    <h2>We Help You</h2>
                    <h2>Digital Business Grow</h2>
                    </div>

                    <small className='rrr'>We provide digital experience services to startups and small businesses. We help our
clients succeed by creating brand identities, digital experiences, and print materials. Sed
trspiciatis unde omnis iste natus error sit voluptatem accusantium.</small>

                   <div className="ioio">
                   <div className="list-oco">
                   <span> <TiTick /></span>
                    <h6>Track your daily activity.</h6>
                    </div>
                    <div className="list-oco">
                    <span> <TiTick /></span>
                    <h6>Start a private group video call.</h6>
                    </div>
                    <div className="list-oco">
                    <span> <TiTick /></span>
                    <h6>All the lorem ipsum generators on the Internet.</h6>
                    </div>
                   </div>
                    
                </div>

        </div>

        <div className="about--middle">
            <section>
            <img src={About1} alt="" className="moving-img" />
                <h4>Select Your Products</h4>
                <small>Choose from select produce to start.
                Keep, add, or remove items.</small>
            </section>
            <section>
                <img src={About2} alt="" />
                <h4>Our Shop Orfarm</h4>
                <small>We provide 100+ products, provide
                enough nutrition for your family.</small>
            </section>
            <section>
                <img src={About3} alt="" />
                <h4>Delivery To Your</h4>
                <small>Delivery to your door. Up to 100km
                and it's completely free.</small>
            </section>
        </div>


        <div className="middle-back">
            <h2>Our Amazing Work</h2>
            <small>The liber tempor cum soluta nobis eleifend option congue doming quod mazim.</small>

            <div className="list-o-">
                <span>
                    <img src="" alt="" />
                    <h2>Who We Are</h2>
                    <small>Lorem ipsum dolor sit amet consectetur
adipisicing elit, sed do eiusmod tempor labore
et dolore dignissimos cumque.</small>
                </span>
            </div>
        </div>

    </div>
  )
}

export default AboutUs