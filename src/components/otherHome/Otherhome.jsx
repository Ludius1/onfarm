import React from 'react'
import { FaRegStar } from "react-icons/fa6";
import { LuChevronRight } from "react-icons/lu";
import './otherhome.css'
import Avatar from '../../assets/test-avata-2.png'
import TreeLeaf1 from '../../assets/tree-leaf-4.svg'
import TreeLeaf2 from '../../assets/tree-leaf-5.svg'
import TreeLeaf3 from '../../assets/tree-leaf-6.png'
import Categories from '../categories/Categories';
import Latestnews from '../latestnews/Latestnews';

const Otherhome = () => {
  return (
    <div className="otherhome">
        <div className="testimobial__sect">
            <div className="testimoniall__section">
            <span className="go__slide"><LuChevronRight /></span>
                
            <div className="testimonials">
                <img src={Avatar} alt="" />
                <span className="testimonpnial">
                    " Also like the fact that I can pick my staples in the brown
                    paper packs and glass containers at the zero waste section, with an
                    idea to reduce plastic and also more convenient. "
                </span>
                
                <small className='testimonial__details'>
                    <small className='grading'>
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    </small>
                    <h4 className="testumonial__name">ALGISTINO LIONEL</h4>
                    <span className="testimonial__work">Web Designer at Blueskytechco</span>
                </small>
            </div>
            <span className="go__slide"><LuChevronRight /></span>
                </div>

                <div className="testimonial__positioning">
                    <img className='testimonial__leaf__right' src={TreeLeaf1} alt="" />
                    <img className='testimonial__leaf__left' src={TreeLeaf2} alt="" />
                    <img className='testimonial__leaf__down' src={TreeLeaf3} alt="" />
                </div>
        </div>

        <Categories/>
        <Latestnews/>
    </div>
  )
}

export default Otherhome