import React from 'react'
import Section_header from '../section_header/Section_header'
import './latestnews.css'
import Blog1 from './../../assets/blog-bg-2.jpg'

const Latestnews = () => {
  return (
    <div className="latest__news__sect">
         <div className="latest__news">
            <Section_header all__section__head={"Our Latest News"}/>
        </div>

        <div className="blog__sections">
        <div className="latest__news__cart">
            <img src={Blog1} alt="" />

            <div className="text__news">
                <span className="news-heading">
                    <span className="news__category">ORGANICS &#x2022;</span>
                    <small className="incharge">ADMIN </small>
                    <small className="date">SEP 15. 2022</small>
                </span>

                <small className="news__dec"> The Best Great Benefits Of Fresh Beef For Women's Health
                </small>
            </div>

        </div>
        <div className="latest__news__cart">
            <img src={Blog1} alt="" />

            <div className="text__news">
                <span className="news-heading">
                    <span className="news__category">ORGANICS &#x2022;</span>
                    <small className="incharge">ADMIN </small>
                    <small className="date">SEP 15. 2022</small>
                </span>

                <small className="news__dec"> The Best Great Benefits Of Fresh Beef For Women's Health
                </small>
            </div>

        </div>
        {/* <div className="latest__news__cart">
            <img src={Blog1} alt="" />

            <div className="text__news">
                <span className="news-heading">
                    <span className="news__category">ORGANICS &#x2022;</span>
                    <small className="incharge">ADMIN </small>
                    <small className="date">SEP 15. 2022</small>
                </span>

                <small className="news__dec"> The Best Great Benefits Of Fresh Beef For Women's Health
                </small>
            </div>

        </div>
        <div className="latest__news__cart">
            <img src={Blog1} alt="" />

            <div className="text__news">
                <span className="news-heading">
                    <span className="news__category">ORGANICS &#x2022;</span>
                    <small className="incharge">ADMIN </small>
                    <small className="date">SEP 15. 2022</small>
                </span>

                <small className="news__dec"> The Best Great Benefits Of Fresh Beef For Women's Health
                </small>
            </div>

        </div> */}

        </div>

    </div>
  )
}

export default Latestnews