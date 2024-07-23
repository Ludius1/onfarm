import React from 'react'
import { blogdata } from './blogCardData'
import './blog.css'
import { Link } from 'react-router-dom'

const Blog = () => {
    window.scrollTo(0,0)
  return (
   <div className="blog__section Signup">
        {
            blogdata.map((blogdata) => (
                <Link to="/error/404">
                         <div className="blog__card" key={blogdata.id}>
                <img src={blogdata.src} alt="" />
    
                <small>{blogdata.postedby} . <span>{blogdata.postedon}</span></small>
                <h4>{blogdata.title}</h4>
    
                <span className="blog__desc">{blogdata.dec}</span>
    
                <button>CONTINUE READING</button>
            </div>
                </Link>
           
            ))
        }
       
   </div>
  )
}

export default Blog