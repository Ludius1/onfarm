import React from 'react'
import './productCartHead.css'
import { LuChevronRight } from "react-icons/lu";

const ProductCartHead = ({heading, heading2, heading3}) => {
  return (
    <div className="ProductCartHead">
        <div className="weekly__head">
            <span>
             <span> {heading}</span> 
             <span> {heading2}</span> 
             <span> {heading3}</span> 
              
            </span>
            
            <small>
                <h5>View All</h5>
                <span><LuChevronRight /></span>
            </small>
        </div>
    </div>
  )
}

export default ProductCartHead