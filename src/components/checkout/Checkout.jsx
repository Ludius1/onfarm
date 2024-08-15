import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/authContext";
import { GoFileDirectoryFill } from "react-icons/go";
import { Link } from 'react-router-dom';
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import '../checkout/checkout.css'

const Checkout = () => {
    const [openPFAQ1, setOpenPFAQ1] = useState(false);
  const [openPFAQ2, setOpenPFAQ2] = useState(false);
  const [openPFAQ3, setOpenPFAQ3] = useState(false);
    const [products, setProducts] = useState([]);
  const [cartTotals, setCartTotals] = useState({ subtotal: 0, total: 0 });
  const [reload, setReload] = useState(false);
      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const { token, user } = useContext(AuthContext);

  const headers = {
    authorization: `Bearer ${token}`,
  };

  const getCartItems = () => {
    axios
      .get(`${API_BASE_URL}/api/v1/products/cart`, { headers })
      .then((response) => {
        setProducts(response.data.cart);
        calculateTotals(response.data.cart); // Calculate totals when cart items are fetched
      })
      .catch((error) => console.error("Error fetching cart items:", error));
  };


  useEffect(() => {
    getCartItems();
  }, [reload]);

  const calculateTotals = (items) => {
    const subtotal = items.reduce(
      (sum, product) => sum + product.product?.productId?.price * product?.product?.quantity,
      0
    );
    setCartTotals({ subtotal, total: subtotal });
  };

  return (
    <div className="checkout__section">
        <div className="Signup">
            <span className="shop__detail__link">Home / <small> Checkout</small></span>

            <div className="checkout__container">
                <div className="left__checkout">
                    <div className="top__left__checkot">
                            <small><GoFileDirectoryFill/></small>
                            <span>
                                Returning customer?
                                <Link to="/login">Click here to login</Link>
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
                                <Link to="/login">Click here enter your code</Link>
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

                                {products?.map((product) => (
                                <div key={product._id} className="head-reciept--" >
                                    <span>{product?.product?.productId?.product__name} <strong>x <small>{product?.product?.quantity}</small></strong></span> 
                                    <small>${product.product?.productId?.price * product?.product?.quantity}.00</small>
                             
                                </div>
                                   ))}
                                <div className="head-reciept--">
                                    <span>Cart Subtotal</span> 

                                    <div className="radio--recipt">
                                        <small> 
                                        
                                            <input type="radio" name="shipping" id="radio1" />
                                            <label htmlFor="radio1">Flat Rate: $0.00</label>
                                        </small>
                                        <small>
                                        
                                            <input type="radio" name="shipping" id="radio2" />
                                            <label htmlFor="radio2">Free Shipping</label>
                                        </small>
                                    </div>

                                </div>

                                <div className="head-reciept-- special">
                                    <span>Order Total</span> 
                                    <small className='sub-total'>${cartTotals.total}</small>
                                </div>
                            </div>


                            <div className="payment--type">
      <div className="MethodTransfer">
        <span className="top__methodTransfer" onClick={() => setOpenPFAQ1(!openPFAQ1)}>
          <small>Direct Bank Transfer </small>
          <div className="reviept--icon">
            <small className="icon__toggle">
              {openPFAQ1 ? <FiMinus /> : <GoPlus />}
            </small>
          </div>
        </span>
        <div className={`openPFAQ ${openPFAQ1 ? 'open' : ''}`}>
          <small>
            Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.
          </small>
        </div>
      </div>

      <div className="MethodTransfer">
        <span className="top__methodTransfer" onClick={() => setOpenPFAQ2(!openPFAQ2)}>
          <small>Cheque Payment</small>
          <div className="reviept--icon">
            <small className="icon__toggle">
              {openPFAQ2 ? <FiMinus /> : <GoPlus />}
            </small>
          </div>
        </span>
        <div className={`openPFAQ ${openPFAQ2 ? 'open' : ''}`}>
          <small>
            Please send your cheque to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
          </small>
        </div>
      </div>

      <div className="MethodTransfer">
        <span className="top__methodTransfer" onClick={() => setOpenPFAQ3(!openPFAQ3)}>
          <small>PayPal</small>
          <div className="reviept--icon">
            <small className="icon__toggle">
              {openPFAQ3 ? <FiMinus /> : <GoPlus />}
            </small>
          </div>
        </span>
        <div className={`openPFAQ ${openPFAQ3 ? 'open' : ''}`}>
          <small>
            Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.
          </small>
        </div>
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