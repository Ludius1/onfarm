import React from 'react'
import './productCartHead.css'
import { LuChevronRight } from "react-icons/lu";
import { Link } from 'react-router-dom';

const ProductCartHead = ({heading, heading2, heading3}) => {
  return (
    <div className="ProductCartHead">
        <div className="weekly__head">
            <span>
             <span> {heading}</span> 
             <span> {heading2}</span> 
             <span> {heading3}</span> 
              
            </span>
            
           <Link to="/shop">
           <small>
                <h5>View All</h5>
                <span><LuChevronRight /></span>
            </small>
           </Link>
        </div>
    </div>
  )
}

export default ProductCartHead