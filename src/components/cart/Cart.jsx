import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { TiTimes } from "react-icons/ti";
import { Link } from "react-router-dom";
import "../cart/cart.css";
import { AuthContext } from "../../context/authContext";
import { toast } from "sonner";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [cartTotals, setCartTotals] = useState({ subtotal: 0, total: 0 });
  const [reload, setReload] = useState(false);

  const { token, user } = useContext(AuthContext);
      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const headers = {
    authorization: `Bearer ${token}`,
  };

  const getCartItems = () => {
    axios
      .get(`${API_BASE_URL}/api/v1/products/cart`, { headers })
      .then((response) => {
        setProducts(response.data.cart);
        calculateTotals(response.data.cart); // Calculate totals when cart items are fetched
        console.log(response.data.cart)
      })
      .catch((error) => console.error("Error fetching cart items:", error));
  };

  const removeProduct = (productId) => {
    axios
      .delete(`${API_BASE_URL}/api/v1/products/cart/${productId}`, { headers })
      .then((response) => {
        toast.success(response.data.message);
        setReload(!reload);
      })
      .catch((error) => {
        console.error("Error deleting product from cart:", error);
        if (error.response) {
          toast.error(error.response.data.message);
        } else {
          toast.error('Server error');
        }
      });
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

  const updateCart = (id, quantity) => {
    axios
      .post(
          `${API_BASE_URL}/api/v1/products/cart/add`,
        { productId: id, quantity: quantity },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((response) => {
        console.log("Cart updated:", response.data);
        toast.success(response.data.msg);
        setReload(!reload);
      })
      .catch((error) => {
        toast.error(error.message);
        console.error("Error adding to cart:", error);
      });
  };

  const increaseQuantity = (id, quantity) => {
    // console.log("Product ID:", id);
    // console.log("Current Quantity:", quantity);
    updateCart(id, quantity + 1);
  };
  

  const decreaseQuantity = (id, quantity) => {
    if (quantity > 1) {
      updateCart(id, quantity - 1);
    } else {
      removeProduct(id);
    }
  };

  return (
    <div className="cart__sectionn">
      <div className="Signup">
        <span className="shop__detail__link">
          Home / <small>Cart</small>
        </span>

       <div className="cart__table__wrapper">
  <div className="cart__table">
    <table>
      <thead>
        <tr>
          <th>Image</th>
          <th>Product Name</th>
          <th>Unit Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {products?.map((product) => (
          <tr key={product._id}>
            <td className="table__img">
              <img
                src={product?.product?.productId?.prdDetailsId?.src[0]}
                alt={product?.product?.productId?.product__name}
                
              />
            </td>
            <td className="table__name">
              {product.product?.productId?.product__name}
            </td>
            <td>${product.product?.productId?.price}</td>
            <td className="table__quantity">
              <small>
                <button
                  className="changeQuantity"
                  onClick={() => decreaseQuantity(product.product?.productId?._id, product?.product?.quantity)}
                >
                  -
                </button>
                <span>{product?.product?.quantity}</span>
                <button
                  className="changeQuantity"
                  onClick={() => increaseQuantity(product.product?.productId?._id, product?.product?.quantity)}
                >
                  +
                </button>
              </small>
            </td>
            
            <td>${product.product?.productId?.price * product?.product?.quantity}</td>
            <td>
              <button
                className="removeProduct"
                onClick={() => removeProduct(product.product?.productId?._id)}
              >
                <TiTimes className="removeicon" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
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
