import React, { useState } from 'react'
import { GoFileDirectoryFill } from "react-icons/go";
import { Link } from 'react-router-dom';
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import '../checkout/checkout.css'

const Checkout = () => {
    const [openPFAQ, setOpenPFAQ] = useState(false)
    const [changePlusMinus, setchangePlusMinus] = useState('')

    const handlechangePlusMinus = (className) => {
        setchangePlusMinus(className)
    }

  return (
    <div className="checkout__section">
        <div className="Signup">
            <span className="shop__detail__link">Home / <small>Checkout</small></span>

            <div className="checkout__container">
                <div className="left__checkout">
                    <div className="top__left__checkot">
                            <small><GoFileDirectoryFill/></small>
                            <span>
                                Returning customer?
                                <Link to="/login">Click here <small>to login</small></Link>
                        </span>
                    </div>

                    <div className="billing">
                        <span className='billing__head'>Billing Details</span>
                        <form action="">
                            <span className="country" >
                                <label For="Country"> Country *</label>
                                <select name="" id="">
                                    <option value="">United State</option>
                                    <option value="">Algeria</option>
                                    <option value="">Canada</option>
                                    <option value="">Germany</option>
                                    <option value="">England</option>
                                    <option value="">Qatar</option>
                                    <option value="">Dominican Republic</option>

                                </select>
                            </span>

                            <span className='special--form'>
                                <small>
                                    <label For="">First Name *</label>
                                    <input type="text" name="" id="" />
                                </small>

                                <small>
                                    <label For="">Last Name *</label>
                                    <input type="text" name="" id="" />
                                </small>
                            </span>

                            <span>
                                <label For="">Company Name</label>
                                <input type="text" name="" id="" />
                            </span>

                            <span>
                                <label For="">Address</label>
                                <input type="text" name="" id="" placeholder='Street address' />
                            </span>

                            <span>
                                <input type="text" name="" id="" placeholder='Apartment, suite, unit etc (optional)' />
                            </span>

                            <span>
                                <label For="">Town / City *</label>
                                <input type="text" name="" id="" placeholder='Town / City ' />
                            </span>
                            
                            <span className='special--form'>
                                <small>
                                    <label For="">State / Country</label>
                                    <input type="text" name="" id="" />
                                </small>

                                <small>
                                    <label For="">Postcode / Zip *</label>
                                    <input type="text" name="" id="" placeholder='Postcode / Zip '/>
                                </small>
                            </span>

                            <span className='special--form'>
                                <small>
                                    <label For="">Email Address *</label>
                                    <input type="text" name="" id="" />
                                </small>

                                <small>
                                    <label For="">Phone *</label>
                                    <input type="text" name="" id="" />
                                </small>
                            </span>
                        </form>
                    </div>
                </div>


                <div className="left__checkout">
                    <div className="top__left__checkot">
                            <small><GoFileDirectoryFill/></small>
                            <span>
                            Have a coupon? 
                                <Link to="/login">Click here <small>enter your code</small></Link>
                             </span>
                    </div>

                    <div className="reciept">
                        <span className='your-order'>Your Order</span>

                        <div className="product-checkout-reciept">

                            <div className="products-recipt--r">
                                <div className="head-reciept--">
                                    <span>Product</span> 
                                    <small>Total</small>
                                </div>

                                <div className="head-reciept--">
                                    <span>Vestibulum suscipit <strong>x <small>1</small></strong></span> 
                                    <small>$165.00</small>
                                </div>
                                <div className="head-reciept--">
                                    <span>Vestibulum suscipit dictum magna <strong>x <small>1</small></strong></span> 
                                    <small>$165.00</small>
                                </div>

                                <div className="head-reciept--">
                                    <span>Cart Subtotal</span> 

                                    <div className="radio--recipt">
                                        <small>
                                            <input type="radio" name="" id="" />
                                            <span>Flat Rate: $7.00</span>
                                        </small>
                                        <small>
                                            <input type="radio" name="" id="" />
                                            <span>Free Shipping</span>
                                        </small>
                                    </div>
                                </div>

                                <div className="head-reciept-- special">
                                    <span>Order Total</span> 
                                    <small className='sub-total'>$265.00</small>
                                </div>
                            </div>


                            <div className="payment--type">
                                <div className="MethodTransfer">
                                        <span className="top__methodTransfer" onClick={()=> setOpenPFAQ(!openPFAQ)}>
                                             <small>Direct Bank Transfer </small>
                                             <div className="reviept--icon">
                                                <small className={`minus__recipt`}><GoPlus/></small>
                                                <small className={`plus__recipt `}><FiMinus/></small>
                                             </div>
                                        </span>

                                        <small className={`plus__recipt ${openPFAQ ? 'minus__recipt' : false} `}>
                                        Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.
                                        </small>
                                </div>

                                <div className="MethodTransfer">
                                        <span className="top__methodTransfer">
                                             <small>Cheque Payment</small>
                                             <div className="reviept--icon">
                                                <small className="minus__recipt"><GoPlus/></small>
                                                <small className="plus__recipt"><FiMinus/></small>
                                             </div>
                                        </span>
                                        <small className='plus__recipt'>
                                        Please send your cheque to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
                                        </small>
                                </div>

                                <div className="MethodTransfer">
                                        <span className="top__methodTransfer">
                                        <small>PayPal</small>
                                             <div className="reviept--icon">
                                                <small className="minus__recipt"><GoPlus/></small>
                                                <small className="plus__recipt"><FiMinus/></small>
                                             </div>
                                        </span>
                                       <small className='plus__recipt'> Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.</small>
                                </div>
                            </div>

                            <button>PLACE ORDER</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Checkout