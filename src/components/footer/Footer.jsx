import React from 'react'
import { CiHeart } from "react-icons/ci";
import Payment from '../../assets/payment.png'
import './footer.css'
import { otherdata } from '../footer/otherdata';
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { RiMailCheckLine } from "react-icons/ri";

const Footer = () => {
  return (
   <div className="footer__sec">
        <div className="footer__head__sect__bg">
        <div className="footer__head__sother" >
             <div className="other__container">
        {otherdata.map((otherdata)=> (
            <div className="footer__head__sfeatures"  key={otherdata.id}>
            <span>
                <img src={otherdata.src} alt="" />
            </span>
            <h6>{otherdata.head}</h6>
            <small>{otherdata.dec}</small>
        </div>
        ))}
            </div>
                  
        </div>
        </div>
         <div className="footer__section">
        <div className="footer">
          <div className="left__footer">
                <div className="first__footer">
                    <h3>LET US HELP YOU</h3>
                    <small>
                    If you have any question, please contact us at:support@example.com
                    </small>


                    <div className='sub__footer'>
                        <small>Social Media:</small>
                        <span>
                            <FaFacebookF />
                            <FaXTwitter />
                            <FaYoutube />
                            <FaPinterestP />
                            <FaThreads />
                        </span>
                    </div>
                </div>

                <div className="secound__footer first__footer">
                    <h3>LOOKING FOR ORFARM?</h3>
                    <small>
                    68 St. Vicent Place, Glasgow, Greater Newyork NH2012, UK.
                    </small>

                    <div className="sub__footer">   
                            <small>Monday – Friday: <span>8:10 AM – 6:10 PM</span></small>
                            <small>Saturday: <span>10:10 AM – 06:10 PM</span></small>
                            <small>Sunday: <span>Close</span></small>
                    </div>
                </div>

                <div className="third__footer first__footer hot__footer">
                    <h3>HOT CATEGORIES</h3>
                    <span>
                    <small> Fruits & Vegetables</small>
                    <small> Dairy Products</small>
                    <small> Package Foods</small>
                    <small> Beverage</small>
                    <small> Health & Wellness</small>
                    </span>
                </div>

                <div className="newsletter">
                    <h3>OUR NEWSLETTER</h3>
                    <h4>Subscribe to the Orfarm mailing list to receive updates
                        on new arrivals & other information.</h4>

                    <span>
                        <div className="input__sec">
                            <small>
                                <span className='mail__icon'> <RiMailCheckLine /></span>
                                <input type="text" placeholder='Your email address...' />
                            </small>
                            <button className='sub__btn'>SUBSCRIBE</button>
                        </div>

                        <div className='check__sec'>
                            <input type="checkbox" name="" id="" />
                            <small>I accept terms & conditions & privacy policy.</small>
                        </div>
                    </span>
                  </div>

          </div>
            
            
        </div>

        <div className="copyright">
            <span>Copyright © <small>ORFARM</small> all rights reserved. Designed by <small>LudiusDev</small>.</span>
            <small className='pay__img'><img src={Payment} alt="" /></small>
        </div>
    </div>
   </div>
  )
}

export default Footer