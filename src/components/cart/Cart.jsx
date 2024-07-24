import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { TiTimes } from "react-icons/ti";
import { Link } from "react-router-dom";
import "../cart/cart.css";
import { AuthContext } from "../../context/authContext";

const Cart = () => {
  window.scrollTo(0, 0);
  const [products, setProducts] = useState([]);
  const [cartTotals, setCartTotals] = useState({ subtotal: 0, total: 0 });

  const { token, user } = useContext(AuthContext);
  // console.log(user);

  const getCartItems = () => {
    axios
      .get("http://localhost:5000/api/v1/products/cart")
      .then((response) => {
        console.log("Response:", response.data); // Log the response data
        setProducts(response.data.cart.items); // Assuming response.data.items contains the populated product details
        console.log("Items Response:", response.data.cart);
        // calculateTotals(response.data);
      })
      .catch((error) => console.error("Error fetching cart items:", error));
  };

  useEffect(() => {
    getCartItems();
  }, []);

  const calculateTotals = (items) => {
    const subtotal = items.reduce(
      (sum, product) => sum + product.price * product.quantity,
      0
    );
    setCartTotals({ subtotal, total: subtotal });
  };

  const increaseQuantity = (id) => {
    const updatedProducts = products.map((product) =>
      product.productId === id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    setProducts(updatedProducts);
    calculateTotals(updatedProducts);
  };

  const decreaseQuantity = (id) => {
    const updatedProducts = products.map((product) =>
      product.productId === id && product.quantity > 1
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );
    setProducts(updatedProducts);
    calculateTotals(updatedProducts);
  };

  const removeProduct = (id) => {
    const updatedProducts = products.filter(
      (product) => product.productId !== id
    );
    setProducts(updatedProducts);
    calculateTotals(updatedProducts);
  };

  return (
    <div className="cart__sectionn">
      <div className="Signup">
        <span className="shop__detail__link">
          Home / <small>Cart</small>
        </span>
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
              {products?.map((product) => (
                <tr key={product.productId}>
                  <td className="table__img">
                    <img
                      src={product.image}
                      alt={product.product__name}
                      width="50"
                    />
                  </td>
                  <td className="table__name">
                    {product.productId.product__name}
                  </td>
                  <td>${product.productId.price}</td>
                  <td className="table__quantity">
                    <small>
                      <button
                        className="changeQuantity"
                        onClick={() => decreaseQuantity(product.productId)}
                      >
                        -
                      </button>
                      <span>{product.quantity}</span>
                      <button
                        className="changeQuantity"
                        onClick={() => increaseQuantity(product.productId)}
                      >
                        +
                      </button>
                    </small>
                  </td>
                  <td>${product.productId.price * product.quantity}</td>
                  <td className="table__shop">{product.productId.shop}</td>{" "}
                  {/* Added shop data */}
                  <td>
                    <button
                      className="removeProduct"
                      onClick={() => removeProduct(product.productId)}
                    >
                      <TiTimes className="removeicon" />
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
              <input type="text" placeholder="Coupon code" />
              <button>APPLY COUPON</button>
            </form>
            <button
              className="update_cart__btn"
              onClick={() => calculateTotals(products)}
            >
              UPDATE CART
            </button>
          </div>
          <div className="cart__total">
            <h4>Cart Totals</h4>
            <small>
              <span>
                Subtotal <small>${cartTotals.subtotal}</small>
              </span>
              <span>
                Total <small>${cartTotals.total}</small>
              </span>
            </small>
            <span>
              <Link to="/checkout">
                <button>PROCEED TO CHECKOUT</button>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
