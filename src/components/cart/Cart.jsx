import React from 'react'
import '../cart/cart.css'
import { useState } from 'react';
import Chicken from '../../assets/products30-min.jpg'
import Banana from '../../assets/baanana.jpg'
import CancelIcon from '../../assets/cancel-icon.svg'
import { Link } from 'react-router-dom';

const Cart = () => {
  const initialProducts = [
    {
      id: 1,
      image: Chicken,
      name: 'Mangosteen Organic From VietNamese',
      unit: '1kg',
      price: 60.00,
      quantity: 1
    },
    {
      id: 2,
      image: Banana,
      name: 'Laffy Taffy Laff Bites Gone Bananas - 4 Packs',
      unit: '500g',
      price: 56.00,
      quantity: 1
    },
  ];


  const [products, setProducts] = useState(initialProducts);

  const increaseQuantity = (id) => {
    setProducts(products.map(product => 
      product.id === id ? { ...product, quantity: product.quantity + 1 } : product
    ));
  };

  const decreaseQuantity = (id) => {
    setProducts(products.map(product => 
      product.id === id && product.quantity > 1 ? { ...product, quantity: product.quantity - 1 } : product
    ));
  };

  const removeProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div className='cart__sectionn'>
         <div className="Signup">
            <span className="shop__detail__link">Home / <small>Cart</small></span>

            <div className="cart__table">
                    <table>
                      <thead>
                        <tr>
                          <th>Image</th>
                          <th>Product Name</th>
                          <th>Unit</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Total</th>
                          <th>Remove</th>
                        </tr>
                      </thead>
                      
                      <tbody>
                        {products.map((product) => (
                          <tr key={product.id}>
                            <td className='table__img'>
                              <img src={product.image} alt={product.name} width="50" />
                            </td>
                            <td className='table__name'>{product.name}</td>
                            <td>{product.unit}</td>
                            <td>${product.price.toFixed(2)}</td>
                            <td className='table__quantity'>
                                <small>
                                  <button className='changeQuantity' onClick={() => decreaseQuantity(product.id)}>-</button>
                                <span>{product.quantity}</span>
                                <button className='changeQuantity' onClick={() => increaseQuantity(product.id)}>+</button>
                                </small>
                            </td>
                            <td>${(product.price * product.quantity).toFixed(2)}</td>
                            <td>
                              <button className='removeProduct' onClick={() => removeProduct(product.id)}>
                                <img src={CancelIcon} alt="" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      
                    </table>
           </div>
           

           <div className="update__table">
                    <div className="coupon">
                      <form action="">
                          <input type="text" placeholder='Coupon code' />
                          <button>APPLY COUPON</button>
                      </form>
                        
                      <button className="update_cart__btn">UPDATE CART</button>

                    </div>

                    <div className="cart__total">
                          <h4>Cart Totals</h4>
                        <small>
                          <span>Subtotal <small>$250.00</small></span>
                          
                          <span>Total <small>$250.00</small></span>
                        </small>

                        <span>
                          <Link to="/checkout"> <button>PROCEED TO CHECKOUT</button></Link>
                        </span>
                    </div>

           </div>

         </div>
    </div>
  )
}

export default Cart