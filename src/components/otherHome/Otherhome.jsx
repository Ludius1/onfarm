import React, { useState, useEffect } from 'react';
import { FaRegStar } from "react-icons/fa6";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import './otherhome.css';
import Avatar from '../../assets/test-avata-2.png';
import Avatar1 from '../../assets/employee-3.png';
import Avatar2 from '../../assets/testimonial-avatar4.jpg';
import TreeLeaf1 from '../../assets/tree-leaf-4.svg';
import TreeLeaf2 from '../../assets/tree-leaf-5.svg';
import TreeLeaf3 from '../../assets/tree-leaf-6.png';
import Categories from '../categories/Categories';
import Latestnews from '../latestnews/Latestnews';

const reviews = [
  {
    avatar: Avatar,
    text: "I love shopping here because of the amazing variety of fresh produce. The organic section is always stocked with the best fruits and vegetables. Plus, the zero-waste packaging options are a huge bonus!",
    name: "ALGISTINO LIONEL",
    work: "Nutritionist",
    rating: 5
  },
  {
    avatar: Avatar1,
    text: "I recently started using their delivery service, and it's been a game-changer. The groceries arrive fresh and well-packed, and I appreciate the eco-friendly packaging. Highly recommend for busy families!",
    name: "Emily Johnson",
    work: "Working Mom",
    rating: 4
  },
  {
    avatar: Avatar2,
    text: "The convenience of finding all my weekly essentials in one place is unbeatable. The quality of the meats and dairy products is top-notch, and the customer service is always friendly and helpful.",
    name: "Jane Doe",
    work: "Chef at Blueskytechco",
    rating: 5
  },
  {
    avatar: Avatar,
    text: "Their bakery section is my favorite! Freshly baked bread, delicious pastries, and a great selection of gluten-free options. The quality and taste are exceptional. I can't resist stopping by every week!",
    name: "Michael Brown",
    work: " Food Blogger at TechCompany",
    rating: 4
  },
 
  // Add more reviews as needed
];

const Otherhome = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [animation, setAnimation] = useState('');

  const handleNextReview = () => {
    setAnimation('slide-out-left');
    setTimeout(() => {
      setCurrentReview((prevIndex) => (prevIndex + 1) % reviews.length);
      setAnimation('slide-in-right');
    }, 500);
  };

  const handlePreviousReview = () => {
    setAnimation('slide-out-right');
    setTimeout(() => {
      setCurrentReview((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
      setAnimation('slide-in-left');
    }, 500);
  };

  const { avatar, text, name, work, rating } = reviews[currentReview];

  useEffect(() => {
    const timeout = setTimeout(() => setAnimation(''), 500);
    return () => clearTimeout(timeout);
  }, [currentReview]);

  return (
    <div className="otherhome">
      <div className="testimobial__sect">
        <div className="testimoniall__section">
          <span className="go__slide" onClick={handlePreviousReview}><LuChevronLeft /></span>

          <div className={`testimonials ${animation}`}>
            <img src={avatar} alt="" />
            <span className="testimonpnial">{text}</span>

            <small className='testimonial__details'>
              <small className='grading'>
                {[...Array(rating)].map((_, index) => <FaRegStar key={index} />)}
              </small>
              <h4 className="testumonial__name">{name}</h4>
              <span className="testimonial__work">{work}</span>
            </small>
          </div>
          <span className="go__slide" onClick={handleNextReview}><LuChevronRight /></span>
        </div>

        <div className="testimonial__positioning">
          <img className='testimonial__leaf__right' src={TreeLeaf1} alt="" />
          <img className='testimonial__leaf__left' src={TreeLeaf2} alt="" />
          <img className='testimonial__leaf__down' src={TreeLeaf3} alt="" />
        </div>
      </div>

      {/* <Categories /> */}
      <Latestnews />
    </div>
  );
};

export default Otherhome;
