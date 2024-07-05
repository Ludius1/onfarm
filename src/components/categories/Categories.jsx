import React from 'react'
import Cart1 from '../../assets/category_1_.png'
import './categories.css'
import { LuChevronRight } from "react-icons/lu";

const Categories = () => {
  return (
    <div className="categories__section">
        <div className="categories__div">
        <div className="categories">
            <img src={Cart1} alt="" />
            <h4 className='categories__categories'>Fresh Vegetables</h4>
            <span>
                <small>Exotic Fruits & Veggies</small>
                <small>Fresh Fruits</small>
                <small>Fresh Vegetables</small>
                <small>Herbs & Seasonings</small>
            </span>

            <small>See All 
                <span><LuChevronRight/></span>
            </small>
        </div>
        <div className="categories">
            <img src={Cart1} alt="" />
            <h4 className='categories__categories'>Fresh Vegetables</h4>
            <span>
                <small>Exotic Fruits & Veggies</small>
                <small>Fresh Fruits</small>
                <small>Fresh Vegetables</small>
                <small>Herbs & Seasonings</small>
            </span>

            <small>See All 
                <span><LuChevronRight/></span>
            </small>
        </div>
        <div className="categories">
            <img src={Cart1} alt="" />
            <h4 className='categories__categories'>Fresh Vegetables</h4>
            <span>
                <small>Exotic Fruits & Veggies</small>
                <small>Fresh Fruits</small>
                <small>Fresh Vegetables</small>
                <small>Herbs & Seasonings</small>
            </span>

            <small>See All 
                <span><LuChevronRight/></span>
            </small>
        </div>
        {/* <div className="categories">
            <img src={Cart1} alt="" />
            <h4 className='categories__categories'>Fresh Vegetables</h4>
            <span>
                <small>Exotic Fruits & Veggies</small>
                <small>Fresh Fruits</small>
                <small>Fresh Vegetables</small>
                <small>Herbs & Seasonings</small>
            </span>

            <small>See All 
                <span><LuChevronRight/></span>
            </small>
        </div>
        <div className="categories">
            <img src={Cart1} alt="" />
            <h4 className='categories__categories'>Fresh Vegetables</h4>
            <span>
                <small>Exotic Fruits & Veggies</small>
                <small>Fresh Fruits</small>
                <small>Fresh Vegetables</small>
                <small>Herbs & Seasonings</small>
            </span>

            <small>See All 
                <span><LuChevronRight/></span>
            </small>
        </div>
        <div className="categories">
            <img src={Cart1} alt="" />
            <h4 className='categories__categories'>Fresh Vegetables</h4>
            <span>
                <small>Exotic Fruits & Veggies</small>
                <small>Fresh Fruits</small>
                <small>Fresh Vegetables</small>
                <small>Herbs & Seasonings</small>
            </span>

            <small>See All 
                <span><LuChevronRight/></span>
            </small>
        </div> */}
        </div>
    </div>
  )
}

export default Categories