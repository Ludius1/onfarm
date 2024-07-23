import React from "react"
import './../shopDetails/shopdetails.css'
import { CiHeart } from "react-icons/ci";
// import ProductDetailsImg from '../../assets/product-detaisl-item2.png'
import { FaRegCirclePlay } from "react-icons/fa6";
import { TiTimes } from "react-icons/ti";
import ProductDetailsImg from '../../assets/product-details-1.png'
import Payment from '../../assets/payment.png'
import ProductDetailsImgUnder from '../../assets/product-detaisl-item2.png'
import PromotionalVideo from '../../assets/product-video1.jpg'
import Sideads from '../../assets/sidebar-product-1.png'
import BigImage from '../../assets/products.jpg'
import SmallBigiMG1 from '../../assets/products1.jpg'
import SmallBigiMG from '../../assets/products2.jpg'
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
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from 'axios';

function ShopDetails() {
    window.scrollTo(0,0)
    const [showIfrane, setshowIfrane] = useState(false)
    const { id } = useParams(); // Get the 'id' parameter from the URL
    const [product, setProduct] = useState([]);
  const [countOrder, setCountOrder] = useState(1);

    const images = [
        { full:  SmallBigiMG1},
        { full:   SmallBigiMG},
        { full:  BigImage}
       
        
      ];
    const [selectedImage, setSelectedImage] = useState(images[0].full);
    const navigate = useNavigate();

    const handleAddToCart = () => {
        const token = localStorage.getItem('authToken'); // Get the token from local storage or wherever it is stored
        console.log(token)
        axios.post('http://localhost:5000/api/v1/cart/add', 
          { productId, quantity: countOrder },
          { headers: { Authorization: `Bearer ${token}` } }
        )
          .then(response => {
            console.log(response.data.message);
            navigate('/cart');
          })
          .catch(error => console.error('Error adding to cart:', error));
      };
    
      const handleMinus = () => {
        if (countOrder > 1) setCountOrder(countOrder - 1);
      };
    
      const handleAdd = () => {
        setCountOrder(countOrder + 1);
      };
    
      const handleCountOrder = (e) => {
        setCountOrder(Number(e.target.value));
      };
    
      
    const [sku, setSku] = useState('');

  useEffect(() => {
    if (product && product._id) {
      setSku(product._id.toUpperCase());
    }
  }, [product]); 




    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/v1/products/${id}`);
                console.log(response)
                setProduct(response.data);
                setProduct(response.data);
                if (response.data.prdDetailsId && response.data.prdDetailsId.src.length > 0) {
                    setSelectedImage(response.data.prdDetailsId.src[0]);
                }
            } catch (error) {
                console.error("Error fetching product details:", error);
            }
        };
        fetchProduct();
    }, [id]);
    

    return  (
        <div className="ShopDetails__">
            <div className="Signup ShopDetails__">
                <span className="shop__detail__link">Home / {product.prdCategoryId?.product__category} /<small>{product.product__name}</small></span>

                 <div className="shop__details__cont">
                    <div className="left-shop__details">
                        <div className="left__shopdetails">
                            <div className="top__shopdetails">
                                <h2>{product.product__name}</h2>
                                <span className="left__header__text__shopdetails">
                                    <span>Brands:<small>{product.brandName}</small></span>
                                    <small>
                                        <span className="details__review">
                                            <FaRegStar />
                                            <FaRegStar />
                                            <FaRegStar />
                                            <FaRegStar />
                                            <FaRegStar />
                                        </span>
                                        <small>0{product.ratings} REVIEWS</small>
                                    </small>
                                    <span>SKU:<small>{sku} </small></span>
                                </span> 
                            </div>

                            <div className="product__dec__details">
                                <div className="product__imgg">
                                    <small className="tag__details">{product.badge}</small>
                                    <div className="img__tag__detail">
                                        <small><img src={selectedImage} alt="" /></small>
                                        

                                        <span className="sample__imgg">
                                        {product?.prdDetailsId?.src?.map((image, index) => (
                                    
                                                    <img className="sample__img__img"
                                                    key={index}
                                                    src={image }
                                                    alt={`Product ${index + 1}`}
                                                    onClick={() => setSelectedImage(image)} />
                                     
                                                ))}
                                                                        
                                        </span>

                                        
                                    </div>
                                </div>

                                <div className="product__dec__detai">
                                    <small className="product__dec_price">${product.price}.00</small>
                                    <span className="dec__produc">
                                        <ul>
                                            <li>{product.featurePro}</li>
                                            {/* <li>Vegan & Allergy friendly</li>
                                            <li>Smooth, velvety dairy free cheese sauce</li> */}
                                        </ul>
                                    </span>

                                    <div className="quantity__sect">
                                        <span>
                                            QTY:
                                            <small>
                                                <span onClick={handleMinus} className="minus"><FiMinus /></span>
                                                <span className="value">
                                                <input type="text" value={countOrder} onChange={handleCountOrder} />
                                                </span>
                                                <span onClick={handleAdd} className="Addition"><GoPlus /></span>
                                            </small> 

                                            <Link onClick={handleAddToCart} className="add-to-cart" > ADD TO CART</Link>
                                            
                                        </span>

                                        <small><CiHeart className="quatoty__heart" /><span>ADD TO WISHLIST</span></small>

                                    </div>

                                    <div className="product__detail__down">
                                        <small className="product__other__detail">
                                            <span>Availability: <small>{product.NumberLeft} Instock</small></span>
                                            <span>Categories: {product.prdCategoryId?.prodSubCartigory}</span>
                                            <span>Tags: {product.featurePro}</span>
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
                                
                                <span className="active--decs">REVIEWS (<small>1</small>)</span>
                            </div>

                            <div className="product__full__desc">
                            <div dangerouslySetInnerHTML={{ __html: product.productDetailsNEW }} />
                            </div>

                            <div className="product__details__detals">
                                <span className="left__product___details__">
                                    <small >
                                        PRODUCT ELEMENTS
                                        <span className="pdppd">
                                            {/* <small>Material: <span>Plastic, Wood</span></small>
                                            <small>Legs: <span> Lacquered oak and black painted oak</span></small>
                                            <small>Dimensions and Weight:: <span>Height: 80 cm, Weight: 5.3 kg</span></small>
                                            <small>Length: <span>48cm</span></small>
                                            <small>Depth: <span>52 cm</span></small>
                                            <small>Lemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                                                fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
                                                sequi nesciunt.</small> */}
                                                <small>
                                                <div dangerouslySetInnerHTML={{ __html: product.productElementDetails }} />
                                                </small>
                                        </span>
                                    </small>
                                </span>

                                <small>
                                    <img src={product?.prdDetailsId?.productImgLeft} alt="" />
                                </small>
                            </div>

                            
                        <div className="more__product__details_">
                            <span>PRODUCT DETAILS</span>
                            <small><div dangerouslySetInnerHTML={{ __html: product.productElementDetails }} />

                            </small>

                           <div className="imgPro">
                                 <span >
                                 <img src={PromotionalVideo} alt="" />
                                 <small onClick={() => setshowIfrane(!showIfrane)}> <FaRegCirclePlay className="play-icon"  /> </small>
                                 </span>
                                 
                                 <div className= {`showIframe ${showIfrane ? 'nowshowIframe' : ''}`}>

                                 <iframe    src={product.productYoutubeLink}  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                 
                                <small className="imes__i" onClick={() => setshowIfrane(!showIfrane)} ><TiTimes className="imes__ifra"/> </small>
                                 </div>
                           </div>
                        </div>

                        <div className="products__supreme__qulai">
                            <span>PRODUCT SUPREME QUALITY</span>
                            <small><div dangerouslySetInnerHTML={{ __html: product.productSupremeQualityDetails }} />

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
                        {cardData.slice(0, 3).map(({id, src, product__category, old__price, product__name, shop, NumberLeft, price, badge, type, mfg, desc, life__span}) =>(
                                 <ProductCard key={id} src={src} product__name={product__name} shop={shop} NumberLeft={NumberLeft} ProductId={id} price={price} old__price={old__price} product__category={product__category} desc={desc} badge={badge} type={type} mfg={mfg} life__span={life__span}/>  
                            ))}
                          
                        </small>
                    </div>
                </div> 
                
            </div>
           
           <div className="down__card--">
                        <span>
                            <h4 className="heading__related__post">RELATED PRODUCTS</h4>
                        <small className="side__side__card_-">
                                {cardData.slice(0, 6).map(({id, src, product__category, old__price, product__name, shop, NumberLeft, price, badge, type, mfg, desc, life__span}) =>(
                                 <ProductCard key={id} src={src} product__name={product__name} shop={shop} NumberLeft={NumberLeft} ProductId={id} price={price} old__price={old__price} product__category={product__category} desc={desc} badge={badge} type={type} mfg={mfg} life__span={life__span}/>  
                            ))}
                        </small>
                        </span>
           </div>
        </div>
    )
}

export default ShopDetails
