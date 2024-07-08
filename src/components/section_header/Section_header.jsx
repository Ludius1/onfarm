import React from 'react'
import './section_header.css'
import { LuChevronRight } from "react-icons/lu";
import { Link } from 'react-router-dom';

const Section_header = ({all__section__head}) => {
  return (
    <div className="Section_header">
        <div className="All-section__head">
                <span>{all__section__head}</span>
                
                <Link to='/shop'>
                <small>
                    <h5>View All</h5>
                    <span><LuChevronRight /></span>
                </small>
                </Link>
            </div>
    </div>
  )
}

export default Section_header