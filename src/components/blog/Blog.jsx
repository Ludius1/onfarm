import React from 'react'
import { blogdata } from './blogCardData'
import './blog.css'
import { Link } from 'react-router-dom'
import { newsData } from '../latestnews/Latestnews';

const Blog = () => {
    window.scrollTo(0,0)
  return (
   <div className="blog__section ">
        {/* {
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
        } */}
       <div className="blog__sectionss">
      {newsData.slice(0, 4).map((news) => (
        <Link to={`/news/${news.id}`} key={news.id} className="latestews__cart">
          <img src={news.image} alt="" />
          <div className="text__newss">
            <span className="news-headingg">
              <span className="news__categoryy">{news.category} &#x2022;</span>
              <small className="incharge">{news.author} </small>
              <small className="date">{news.date}</small>
            </span>
            <small className="news__deccc">{news.description}</small>
          </div>
        </Link>
      ))}
    </div>
       <div className="blog__sectionss wddw">
      {newsData.slice(5, 7).map((news) => (
        <Link to={`/news/${news.id}`} key={news.id} className="latestews__cart">
          <img src={news.image} alt="" />
          <div className="text__newss">
            <span className="news-headingg">
              <span className="news__categoryy">{news.category} &#x2022;</span>
              <small className="incharge">{news.author} </small>
              <small className="date">{news.date}</small>
            </span>
            <small className="news__deccc">{news.description}</small>
          </div>
        </Link>
      ))}
    </div>

    

   </div>
  )
}

export default Blog