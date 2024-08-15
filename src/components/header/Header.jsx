import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { FaChevronDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  const [isenglishDropDownopen, setisenglishDropDownopen] = useState(false);
  const [isusdDropDownopen, setusdDropDownopen] = useState(false);
  const [headerNotifications, setHeaderNotifications] = useState([]);
  const [content, setContent] = useState('');

  //   // const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || '${API_BASE_URL}/api/v1';


  // useEffect(() => {
  //   const fetchNotification = async () => {
  //     try {
  //       const response = await axios.get(`${API_BASE_URL}/api/v1/products/notification`);
  //       if (response.data) {
  //         setContent(response.data.content);
  //       }
  //     } catch (error) {
  //       console.error('Failed to fetch notifications:', error);
  //     }
  //   };
  //   fetchNotification();
  // }, [API_BASE_URL]);

  // useEffect(() => {
  //   fetch(`${API_BASE_URL}/api/v1/products/headerNotifications`)
  //     .then((response) => response.json())
  //     .then((data) => setHeaderNotifications(data))
  //     .catch((error) => console.error('Failed to fetch header notifications:', error));
  // }, [API_BASE_URL]);

  const usdRef = useRef(null);
  const engRef = useRef(null);

  const OutsideClick = (refState, ref) => {
    if (ref.current && !ref.current.contains(event.target)) {
      refState(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', () => OutsideClick(setusdDropDownopen, usdRef));
    document.addEventListener('click', () => OutsideClick(setisenglishDropDownopen, engRef));

    return () => {
      document.removeEventListener('click', () => OutsideClick(setusdDropDownopen, usdRef));
      document.removeEventListener('click', () => OutsideClick(setisenglishDropDownopen, engRef));
    };
  }, []);

  return (
    <div className="header">
      <div className="main__header">
        <div className="left__header">
          <span>{content}</span>
        </div>
        <div className="right__header">
          <div className="right__header__left">
            <div className="rightHeaderleft">
              <span>
                <Link to="/error/404">Store Location</Link>
              </span>
            </div>
          </div>
          <span className="border"></span>
          <div className="right__header__right">
            <div className="insideRightheader">
              <div className="rightHeaderrigghtEnglish" ref={engRef}>
                <span>English</span>
                <small>
                  <FaChevronDown onClick={() => setisenglishDropDownopen(!isenglishDropDownopen)} />
                </small>
                <div className={`click__english__dropdrown ${isenglishDropDownopen ? 'showEnglishDropDown' : 'closeEnglishDropDown'}`}>
                  {/* Map through languages */}
                </div>
              </div>
              <div className="rightHeaderrigghtusd" ref={usdRef}>
                <span>USD</span>
                <small>
                  <FaChevronDown onClick={() => setusdDropDownopen(!isusdDropDownopen)} />
                </small>
                <div className={`click__usd__dropdrown ${isusdDropDownopen ? 'showEnglishDropDown' : 'closeEnglishDropDown'}`}>
                  {/* Map through currencies */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
