import React from 'react';
import { Link } from 'react-router-dom';
import Section_header from '../section_header/Section_header';
import './latestnews.css';
import Blog1 from './../../assets/blog-details-1.jpg';
import Blog2 from './../../assets/category_2_.png';
import Blog3 from './../../assets/category_3_.png';
import Blog4 from './../../assets/category_4_.png';
import Blog5 from './../../assets/category_5_.png';
import Blog6 from './../../assets/category_6_.jpg';
import Blog7 from './../../assets/category_6_.jpg';

export const newsData = [
  {
    id: 1,
    image: Blog1,
    category: 'ORGANICS',
    author: 'ADMIN',
    date: 'SEP 15. 2022',
    description: 'The Best Great Benefits Of Fresh Beef For Women\'s Health',
    fullText: 'Full details about the benefits of fresh beef for women\'s health These are the people who make your life easier. Large tiles were arranged on the counter top plate near the window of the living room, they were connected to the kitchen. The perfect way to enjoy brewing tea on low hanging fruit to identify. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris Large tiles were arranged on the counter top plate near the window of the living room, they were connected to the kitchen counter through the opening in the existing building wall. For me, the most important part of improving at photography has been sharing it. Sign up for an Exposure account, or post regularly to Tumblr, or both. Tell people you’re trying to get better at photography.... '
  },
  {
    id: 2,
    image: Blog2,
    category: 'ORGANICS',
    author: 'ADMIN',
    date: 'SEP 18. 2022',
    description: 'Top 10 Organic Foods for a Healthier Life',
    fullText: 'Full details about the top 10 organic foods for a healthier life...'
  },
  {
    id: 3,
    image: Blog3,
    category: 'WELLNESS',
    author: 'ADMIN',
    date: 'SEP 20. 2022',
    description: 'How to Start Your Day with a Healthy Breakfast',
    fullText: 'Full details about how to start your day with a healthy breakfast...'
  },
  {
    id: 4,
    image: Blog4,
    category: 'RECIPES',
    author: 'ADMIN',
    date: 'SEP 22. 2022',
    description: 'Delicious Vegan Recipes You Need to Try',
    fullText: 'Full details about delicious vegan recipes you need to try...'
  },
  {
    id: 5,
    image: Blog5,
    category: 'TIPS',
    author: 'ADMIN',
    date: 'SEP 25. 2022',
    description: 'Essential Tips for Growing Your Own Organic Garden',
    fullText: 'Full details about essential tips for growing your own organic garden...'
  },
  {
    id: 6,
    image: Blog6,
    category: 'HEALTH',
    author: 'ADMIN',
    date: 'SEP 28. 2022',
    description: 'The Impact of Organic Foods on Mental Health',
    fullText: 'Full details about the impact of organic foods on mental health...'
  },
  {
    id: 7,
    image: Blog7,
    category: 'NUTRITION',
    author: 'ADMIN',
    date: 'SEP 30. 2022',
    description: 'Understanding the Nutritional Benefits of Seasonal Foods',
    fullText: 'Full details about the nutritional benefits of seasonal foods...'
  }
];

const Latestnews = () => {
  return (
    <div className="">
            {/* <div className="latest__news__sect">
    <div className="latest__news">
      <Section_header all__section__head={"Our Latest News"} />
    </div>
    <div className="blog__sectionss">
      {newsData.slice(0, 1).map((news) => (
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

  
             </div> */}
    </div>
  );
}

export default Latestnews;
