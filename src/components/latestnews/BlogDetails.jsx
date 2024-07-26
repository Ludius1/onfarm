import React from 'react';
import { useParams } from 'react-router-dom';
import { newsData } from '../latestnews/Latestnews';
import './blogdetails.css';

const BlogDetails = () => {
  const { id } = useParams();
  const news = newsData.find(item => item.id === parseInt(id));

  if (!news) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="Signup">
      <span>Home /<small>{news.category} / </small>{news.description}</span>

        <div className="blog__details">
            <div className="inside--blog">
            <img src={news.image} alt={news.description} />

            <div className="main--text">

                  <div className="another--">
                  <div className="blog__meta">
        <span className="news__category">{news.category} &#x2022;</span>
        <small className="incharge">{news.author} </small>
        <small className="date">{news.date}</small>
      </div>
      <h1>{news.description}</h1>
      <p>{news.fullText}</p>
                  </div>
     
            </div>
      
            </div>
    </div>
    </div>
  );
}

export default BlogDetails;
