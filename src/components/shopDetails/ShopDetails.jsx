import React from "react"
import './../shopDetails/shopdetails.css'
import { CiHeart } from "react-icons/ci";
// import ProductDetailsImg from '../../assets/product-detaisl-item2.png'
import ProductDetailsImg from '../../assets/product-details-1.png'
import Payment from '../../assets/payment.png'
import ProductDetailsImgUnder from '../../assets/product-detaisl-item2.png'
import PromotionalVideo from '../../assets/product-video1.jpg'
import Sideads from '../../assets/sidebar-product-1.png'
import { GoPlus } from "react-icons/go";
import ProductDetailsImgleft from '../../assets/product-single-1.png'
import ProductCard from "../card/ProductCard";
import { cardData } from "../shop/ShoppData";
import { FiMinus } from "react-icons/fi";
import { HiOutlineReceiptRefund } from "react-icons/hi2";
import { GoShieldCheck } from "react-icons/go";
import Card from "../card/Card";
import { GoPackage } from "react-icons/go";
import { useState } from "react";
import { FaRegStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

function ShopDetails() {
    const [countOrder, setCountOrder] = useState(1)

    const handleAdd = () => {
        setCountOrder(countOrder + 1)
    }

    const handleMinus = () => {
       if(countOrder >= 2) {
        setCountOrder(countOrder - 1)
       }
    }

    const handleCountOrder = () => {
        const value = parseInt(event.target.value, 10)
        if (!isNaN(value) && value >= 1 ) {
            setCountOrder(value)
        }
    }

    return (
        <div className="ShopDetails__">
            <div className="Signup ShopDetails__">
                <span className="shop__detail__link">Home / Breakfast & Dairy /<small>Fresh Mangosteen 100% Organic From VietNamese</small></span>

                <div className="shop__details__cont">
                    <div className="left-shop__details">
                        <div className="left__shopdetails">
                            <div className="top__shopdetails">
                                <h2>Pure Irish Organic 4 Beef Quarter Pounder Burgers - 1Kg</h2>
                                <span className="left__header__text__shopdetails">
                                    <span>Brands:<small>ORFARM</small></span>
                                    <small>
                                        <span className="details__review">
                                            <FaRegStar />
                                            <FaRegStar />
                                            <FaRegStar />
                                            <FaRegStar />
                                            <FaRegStar />
                                        </span>
                                        <small>02 REVIEWS</small>
                                    </small>
                                    <span>SKU:<small>ORFARMVE005</small></span>
                                </span>
                            </div>

                            <div className="product__dec__details">
                                <div className="product__imgg">
                                    <small className="tag__details">HOT</small>
                                    <div className="img__tag__detail">
                                        <small><img src={ProductDetailsImg} alt="" /></small>

                                        <span className="sample__imgg">
                                            <img className="sample__img__img" src={ProductDetailsImgUnder} alt="" />
                                            <img className="sample__img__img" src={ProductDetailsImgUnder} alt="" />
                                            <img className="sample__img__img" src={ProductDetailsImgUnder} alt="" />

                                        </span>
                                    </div>
                                </div>

                                <div className="product__dec__detai">
                                    <small className="product__dec_price">56.00</small>
                                    <span className="dec__produc">
                                        <ul>
                                            <li>Delicious non - dairy cheese sauce</li>
                                            <li>Vegan & Allergy friendly</li>
                                            <li>Smooth, velvety dairy free cheese sauce</li>
                                        </ul>
                                    </span>

                                    <div className="quantity__sect">
                                        <span>
                                            QTY:
                                            <small>
                                                <span onClick={handleMinus} className="minus"><FiMinus /></span>
                                                <span className="value">
                                                    <input type="text" name="" value={countOrder} onChange={handleCountOrder} id="" />
                                                </span>
                                                <span onClick={handleAdd} className="Addition"><GoPlus /></span>
                                            </small>

                                            <Link to='/wishlist' className="add-to-cart" > ADD TO CART</Link>
                                            
                                        </span>

                                        <small><CiHeart className="quatoty__heart" /><span>ADD TO WISHLIST</span></small>

                                    </div>

                                    <div className="product__detail__down">
                                        <small className="product__other__detail">
                                            <span>Availability: <small>54 Instock</small></span>
                                            <span>Categories: Vegetables, Meat & Eggs, Fruit Drink</span>
                                            <span>Tags: Chicken, Natural, Organic</span>
                                        </small>

                                        <span className="payment__secure">
                                            <img src={Payment} alt="" />
                                            <small>Guarantee safe & Secure checkout</small>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="left__shopdetails__additional">
                            <div className="top__left__shopdetails__">
                                <span className="active--decs">PRODUCT DESCRIPTION</span>
                                <span className="active--decs">ADDITIONAL INFORMATION</span>
                                <span className="active--decs">REVIEWS (<small>1</small>)</span>
                            </div>

                            <div className="product__full__desc">
                                Designed by Puik in 1949 as one of the first models created especially for Carl Hansen & Son, and produced since 1950. The last of a series of chairs wegner designed based on inspiration from antique chinese armchairs. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia eserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, aque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            </div>

                            <div className="product__details__detals">
                                <span className="left__product___details__">
                                    <small >
                                        PRODUCT DETAILS
                                        <span className="pdppd">
                                            <small>Material: <span>Plastic, Wood</span></small>
                                            <small>Legs: <span> Lacquered oak and black painted oak</span></small>
                                            <small>Dimensions and Weight:: <span>Height: 80 cm, Weight: 5.3 kg</span></small>
                                            <small>Length: <span>48cm</span></small>
                                            <small>Depth: <span>52 cm</span></small>
                                            <small>Lemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                                                fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
                                                sequi nesciunt.</small>
                                        </span>
                                    </small>
                                </span>

                                <small>
                                    <img src={ProductDetailsImgleft} alt="" />
                                </small>
                            </div>

                            
                        <div className="more__product__details_">
                            <span>PRODUCT DETAILS</span>
                            <small>Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.

                            </small>
                           <div className="imgPro">
                                 <img src={PromotionalVideo} alt="" />
                                 <a href="">
                                 <path d="M15.6499 6.58886L15.651 6.58953C17.8499 7.85553 18.7829 9.42511 18.7829 10.8432C18.7829 12.2613 17.8499 13.8308 15.651 15.0968L15.6499 15.0975L12.0218 17.195L8.3948 19.2919C8.3946 19.292 8.3944 19.2921 8.3942 19.2922C6.19546 20.558 4.36817 20.5794 3.13833 19.8697C1.9087 19.1602 1.01562 17.5694 1.01562 15.0382V10.8432V6.64818C1.01562 4.10132 1.90954 2.51221 3.13721 1.80666C4.36609 1.1004 6.1936 1.12735 8.3942 2.39416C8.3944 2.39428 8.3946 2.3944 8.3948 2.39451L12.0218 4.49135L15.6499 6.58886Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                 </a>
                           </div>
                        </div>

                        <div className="products__supreme__qulai">
                            <span>PRODUCT SUPREME QUALITY</span>
                            <small>Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.

                            </small>
                        </div>
                        </div>

                    </div>




                    <div className="right__shopdetails">
                        <div className="top__right__shop__dets">
                            <span>
                                <small>
                                    <GoPackage className="icon__side__right"/>
                                    <span>Free shipping apply to all
                                    orders over $90</span>
                                </small>
                               

                                <small>
                                    <GoShieldCheck  className="icon__side__right"/>
                                    <span>Guaranteed 100% Organic
                                    from nature farms</span>
                                </small>
                                <small className="nono__" >
                                    <HiOutlineReceiptRefund  className="icon__side__right"/>
                                    <span>60 days returns if you change
                                    your mind</span>
                                </small>
                            </span>

                        </div>

                        <div className="img__ads__right">
                            <img className="wi__img" src={Sideads} alt="" />
                        </div>

                        <small className="side__side__card_cont">
                                {cardData.slice(0, 3).map((cardData) =>(
                                <ProductCard  display="none" cardData={cardData}/>  
                            ))}
                        </small>
                    </div>
                </div>
            </div>
           
           <div className="down__card--">
                        <span>
                            <h4 className="heading__related__post">RELATED POSTS</h4>
                        <small className="side__side__card_-">
                                {cardData.slice(0, 6).map((cardData) =>(
                                <ProductCard cardData={cardData}/>  
                            ))}
                        </small>
                        </span>
           </div>
        </div>
    )
}

export default ShopDetails
