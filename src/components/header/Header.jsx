import React, { useEffect, useRef } from 'react'
import '../header/header.css'
import { FaChevronDown } from "react-icons/fa";
import { headerNotification, rightHeaderleft, english, usd } from './headerData'
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  const [isenglishDropDownopen, setisenglishDropDownopen] = useState(false)
  const [isusdDropDownopen, setusdDropDownopen] = useState(false)

  const usdRef = useRef(null)
  const engRef = useRef(null)
  // console.log(usdRef)
  const OutsideClick = (refState, ref) => {
    if (ref.current && !ref.current.contains(event.target)) {
      // console.log("Outside click ")
      refState(false)

    }
  }

  useEffect(() => {
    document.addEventListener('click', () => OutsideClick(setusdDropDownopen, usdRef))
    document.addEventListener('click', () => OutsideClick(setisenglishDropDownopen, engRef))

    return () => {
      document.removeEventListener('click', () => OutsideClick(setusdDropDownopen, usdRef))
      document.removeEventListener('click', () => OutsideClick(setisenglishDropDownopen, engRef))
    }
  }, [])
  return (
    <div className="header">
      <div className="main__header">
        <div className="left__header">
          {headerNotification.map((headerNotification) => (
            <span key={headerNotification.id}>{headerNotification.notice}</span>
          ))}
        </div>

        <div className="right__header">
          <div className="right__header__left">
            {/* {rightHeaderleft.map((rightHeaderleft)  => (
              <div className="rightHeaderleft" key={rightHeaderleft.id}>
                <span>{rightHeaderleft.nav}</span>
              </div>
            ))} */}
            <div className="rightHeaderleft">
              <span>
              <Link to="/error/404">Store Location</Link>
              </span>
            </div>
             
          </div>
          <span className='border'></span>
          <div className="right__header__right">

            <div className="insideRightheader">

              <div className="rightHeaderrigghtEnglish" ref={engRef}>
                <span>English</span>
                <small><FaChevronDown onClick={() => setisenglishDropDownopen(!isenglishDropDownopen)} /></small>

                <div className={`click__english__dropdrown ${isenglishDropDownopen ? 'showEnglishDropDown' : 'closeEnglishDropDown'}`}>
                  {english.map((english) => (
                    <div className="english__dropdown" key={english.id}>
                      {english.list}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rightHeaderrigghtusd" ref={usdRef}>
                <span>USD</span>
                <small><FaChevronDown onClick={() => setusdDropDownopen(!isusdDropDownopen)} /></small>
                <div className={`click__usd__dropdrown ${isusdDropDownopen ? 'showEnglishDropDown' : 'closeEnglishDropDown'}`}>
                  {usd.map((usd) => (
                    <div className="usd__dropdown" key={usd.id}>
                      {usd.list}
                    </div>
                  ))}
                </div>
              </div>


            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Header