here is my shopdetails with the backend and make it work to the cart


function ShopDetails() {

  const handleAddToCart = () => {
    axios.post('http://localhost:5000/api/v1/products/add', { productId: id, quantity: countOrder })
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
      


write a add to cart controller that send userid productid and product details based on the models structure below


const {Schema, model, default: mongoose} = require('mongoose')

const productSchema = new Schema({
    product__name: {
        type: String,
        // required: true
   
    prdDetailsId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "ProductDetails"
    },
    prdCategoryId:{
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "ProductCategory"
    },
    prdSectionId:{
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "ProductSection"
    },
      
   
}, { timestamps: true });



const Product = mongoose.model('Product', productSchema);

module.exports = Product;


const mongoose = require('mongoose');

const addToCartSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    min: 1
  }
});

module.exports = addToCartSchema;


const mongoose = require('mongoose');
const addToCartSchema = require('../models/addToCart');

const cartSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  prdCategoryId:{
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "ProductCategory"
},
prdSectionId:{
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "ProductSection"
},

  prdDetailsId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProductDetails",
    required: true,
},
  items: [addToCartSchema]
}, {
  timestamps: true
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
 
