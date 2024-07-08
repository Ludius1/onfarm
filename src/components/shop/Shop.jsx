import React from 'react'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import ProductCard from '../card/ProductCard'
import { useState, useEffect } from 'react';
import Card from '../card/Card'
import { CardData } from '../card/cardData';
import '../../components/shop/shop.css'
import { FaChevronDown } from "react-icons/fa";
import Category1 from '../../assets/category-1.jpg'
import Category2 from '../../assets/category-2.jpg'
import Category3 from '../../assets/category-3.jpg'
import Category4 from '../../assets/category-4.jpg'
import Category5 from '../../assets/category-5.jpg'
import Category6 from '../../assets/category-6.png'
import Category7 from '../../assets/category-7.png'
import Category8 from '../../assets/category-8.png'
import Category9 from '../../assets/category-9.png'
import CartSample from '../CartSample';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState(CardData)
     const shopCategory = [
        {id: 1, src: Category1 , name: 'Vegetables'},
        {id: 2, src: Category2 , name: 'Fresh Fruits'},
        {id: 3, src: Category3 , name: 'Fresh Drink'},
        {id: 4, src: Category4 , name: 'Fresh Bakery'},
        {id: 5, src: Category5 , name: 'Biscuits Snacks'},
        {id: 6, src: Category6 , name: 'Fresh Meat'},
        {id: 7, src: Category7 , name: 'Fresh Milk'},
        {id: 8, src: Category8 , name: 'Fresh Milk'},
        {id: 9, src: Category9 , name: 'Fresh Milk'}
    ]
    const [currentGrid, setcurrentGrid] = useState('')
    const [changeColor, setchangeColor] = useState(false)
    const [changeSorting, setchangeSorting] = useState(false)


    const handleClick = (className) => {
        setcurrentGrid(className)
    }
    
  return (
    <div className="shop">
            <span>Home /<small>Shop</small></span>
            <div className="shop__categories">
                {/* {shopCategory.map((shopCategory) => (
                    <span key={shopCategory.id}>
                        <img src={shopCategory.src} alt="" />
                        <small>{shopCategory.name}</small>
                    </span>
                ))}   */}

                    <span> <Link to='/products/categories/Vegetables'>              
                            <img src={Category1} alt="" />
                            <small>Vegetables</small>
                        </Link>
                    </span>
            </div>

            <div className="showing__products">
                <div className="inside__showing__products">
                <span className="left__showing__">
                    Showing
                    <small>1 - 18 of 40 </small>
                    <span>Products</span>
                </span>

                <span className="middle__showing__">
                    <small onClick={() => handleClick('shop__card__style__two')}><svg className='style__green' onClick={()=> setchangeColor(true)}  width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                   <path d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z" fill="currentColor"></path>
                                                   <path d="M2 10C3.10457 10 4 9.10457 4 8C4 6.89543 3.10457 6 2 6C0.89543 6 0 6.89543 0 8C0 9.10457 0.89543 10 2 10Z" fill="currentColor"></path>
                                                   <path d="M2 16C3.10457 16 4 15.1046 4 14C4 12.8954 3.10457 12 2 12C0.89543 12 0 12.8954 0 14C0 15.1046 0.89543 16 2 16Z" fill="currentColor"></path>
                                                   <path d="M8 4C9.10457 4 10 3.10457 10 2C10 0.89543 9.10457 0 8 0C6.89543 0 6 0.89543 6 2C6 3.10457 6.89543 4 8 4Z" fill="currentColor"></path>
                                                   <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" fill="currentColor"></path>
                                                   <path d="M8 16C9.10457 16 10 15.1046 10 14C10 12.8954 9.10457 12 8 12C6.89543 12 6 12.8954 6 14C6 15.1046 6.89543 16 8 16Z" fill="currentColor"></path>
                                                   <path d="M14 4C15.1046 4 16 3.10457 16 2C16 0.89543 15.1046 0 14 0C12.8954 0 12 0.89543 12 2C12 3.10457 12.8954 4 14 4Z" fill="currentColor"></path>
                                                   <path d="M14 10C15.1046 10 16 9.10457 16 8C16 6.89543 15.1046 6 14 6C12.8954 6 12 6.89543 12 8C12 9.10457 12.8954 10 14 10Z" fill="currentColor"></path>
                                                   <path d="M14 16C15.1046 16 16 15.1046 16 14C16 12.8954 15.1046 12 14 12C12.8954 12 12 12.8954 12 14C12 15.1046 12.8954 16 14 16Z" fill="currentColor"></path>
                                                   <path d="M20 4C21.1046 4 22 3.10457 22 2C22 0.89543 21.1046 0 20 0C18.8954 0 18 0.89543 18 2C18 3.10457 18.8954 4 20 4Z" fill="currentColor"></path>
                                                   <path d="M20 10C21.1046 10 22 9.10457 22 8C22 6.89543 21.1046 6 20 6C18.8954 6 18 6.89543 18 8C18 9.10457 18.8954 10 20 10Z" fill="currentColor"></path>
                                                   <path d="M20 16C21.1046 16 22 15.1046 22 14C22 12.8954 21.1046 12 20 12C18.8954 12 18 12.8954 18 14C18 15.1046 18.8954 16 20 16Z" fill="currentColor"></path>
                                                   </svg></small>
            
                    <small  onClick={() => handleClick('shop__card__style__three')}><svg className='style__grey'  onClick={()=> setchangeColor(true)}width="28" height="16" viewBox="0 0 28 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                   <path d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z" fill="currentColor"></path>
                                                   <path d="M2 10C3.10457 10 4 9.10457 4 8C4 6.89543 3.10457 6 2 6C0.89543 6 0 6.89543 0 8C0 9.10457 0.89543 10 2 10Z" fill="currentColor"></path>
                                                   <path d="M2 16C3.10457 16 4 15.1046 4 14C4 12.8954 3.10457 12 2 12C0.89543 12 0 12.8954 0 14C0 15.1046 0.89543 16 2 16Z" fill="currentColor"></path>
                                                   <path d="M8 4C9.10457 4 10 3.10457 10 2C10 0.89543 9.10457 0 8 0C6.89543 0 6 0.89543 6 2C6 3.10457 6.89543 4 8 4Z" fill="currentColor"></path>
                                                   <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" fill="currentColor"></path>
                                                   <path d="M8 16C9.10457 16 10 15.1046 10 14C10 12.8954 9.10457 12 8 12C6.89543 12 6 12.8954 6 14C6 15.1046 6.89543 16 8 16Z" fill="currentColor"></path>
                                                   <path d="M14 4C15.1046 4 16 3.10457 16 2C16 0.89543 15.1046 0 14 0C12.8954 0 12 0.89543 12 2C12 3.10457 12.8954 4 14 4Z" fill="currentColor"></path>
                                                   <path d="M14 10C15.1046 10 16 9.10457 16 8C16 6.89543 15.1046 6 14 6C12.8954 6 12 6.89543 12 8C12 9.10457 12.8954 10 14 10Z" fill="currentColor"></path>
                                                   <path d="M14 16C15.1046 16 16 15.1046 16 14C16 12.8954 15.1046 12 14 12C12.8954 12 12 12.8954 12 14C12 15.1046 12.8954 16 14 16Z" fill="currentColor"></path>
                                                   <path d="M20 4C21.1046 4 22 3.10457 22 2C22 0.89543 21.1046 0 20 0C18.8954 0 18 0.89543 18 2C18 3.10457 18.8954 4 20 4Z" fill="currentColor"></path>
                                                   <path d="M20 10C21.1046 10 22 9.10457 22 8C22 6.89543 21.1046 6 20 6C18.8954 6 18 6.89543 18 8C18 9.10457 18.8954 10 20 10Z" fill="currentColor"></path>
                                                   <path d="M20 16C21.1046 16 22 15.1046 22 14C22 12.8954 21.1046 12 20 12C18.8954 12 18 12.8954 18 14C18 15.1046 18.8954 16 20 16Z" fill="currentColor"></path>
                                                   <path d="M26 4C27.1046 4 28 3.10457 28 2C28 0.89543 27.1046 0 26 0C24.8954 0 24 0.89543 24 2C24 3.10457 24.8954 4 26 4Z" fill="currentColor"></path>
                                                   <path d="M26 10C27.1046 10 28 9.10457 28 8C28 6.89543 27.1046 6 26 6C24.8954 6 24 6.89543 24 8C24 9.10457 24.8954 10 26 10Z" fill="currentColor"></path>
                                                   <path d="M26 16C27.1046 16 28 15.1046 28 14C28 12.8954 27.1046 12 26 12C24.8954 12 24 12.8954 24 14C24 15.1046 24.8954 16 26 16Z" fill="currentColor"></path>
                                                   </svg></small>
                    
                    <small onClick={() => handleClick('shop__card__style__one')}><svg className='style__grey' width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                   <path d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z" fill="currentColor"></path>
                                                   <path d="M2 10C3.10457 10 4 9.10457 4 8C4 6.89543 3.10457 6 2 6C0.89543 6 0 6.89543 0 8C0 9.10457 0.89543 10 2 10Z" fill="currentColor"></path>
                                                   <path d="M2 16C3.10457 16 4 15.1046 4 14C4 12.8954 3.10457 12 2 12C0.89543 12 0 12.8954 0 14C0 15.1046 0.89543 16 2 16Z" fill="currentColor"></path>
                                                   <path d="M20 2C20 2.552 19.553 3 19 3H7C6.448 3 6 2.552 6 2C6 1.448 6.448 1 7 1H19C19.553 1 20 1.447 20 2Z" fill="currentColor"></path>
                                                   <path d="M20 8C20 8.552 19.553 9 19 9H7C6.448 9 6 8.552 6 8C6 7.448 6.448 7 7 7H19C19.553 7 20 7.447 20 8Z" fill="currentColor"></path>
                                                   <path d="M20 14C20 14.552 19.553 15 19 15H7C6.448 15 6 14.552 6 14C6 13.447 6.448 13 7 13H19C19.553 13 20 13.447 20 14Z" fill="currentColor"></path>
                                                </svg></small>
                </span>

                <span className="right__showing__" onClick={()=> setchangeSorting(!changeSorting)}>
                    Default sorting 
                    <span ><FaChevronDown className='fav__down'/></span>
                    <div className={`sorting__option  ${changeSorting ? 'display' : 'notdisplay'}`}>
                    
                    <option value="">Default sorting </option>
                        <option value="">Short popularity</option>
                        <option value="">Show 08 </option>
                        <option value="">Show 20</option>
                    </div>
                </span>
                </div>
            </div>

            

            {products.length > 0 ? 
                        <span className={`shop__card__style__one  ${currentGrid}`} >
                        {/* {CardData.map((CardData) =>(
                            <ProductCard   padding=' 20px' backgroundColor = '#f7f7f9' borderRadius = '7px'  CardData={CardData} /> 
                            
                        ))} */}
        
                        {products.map(({id, src, product__category, old__price, product__name, shop, NumberLeft, price, badge, type, mfg, desc, life__span}) =>(
                                <ProductCard key={id} src={src} product__name={product__name} shop={shop} NumberLeft={NumberLeft} ProductId={id} price={price} old__price={old__price} product__category={product__category} desc={desc} badge={badge} type={type} mfg={mfg} life__span={life__span}/>  
                            ))}
                    </span>
            : <span>No Products found</span> }
        
            
             <span className='shop__slider'>
                <small>1</small>
                <small>2</small>
                <small>3</small>
                <small><MdKeyboardDoubleArrowRight /></small>
            </span> 
            
    </div>
  )
}

export default Shop