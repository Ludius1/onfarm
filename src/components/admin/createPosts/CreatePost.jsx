import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './createPost.css';
import axios from 'axios';
import { toast } from 'sonner';

const CreatePost = () => {
  const [postDetails, setPostDetails] = useState({
    product__name: '',
    productRating: '',
    price: '',
    old__price: '',
    shop: '',
    desc: '',
    badge: '',
    NumberLeft: '',
    type: '',
    mfg: '',
    ratings: 5,
    brandName: 'Orfarm',
    featurePro: '',
    life__span: '',
    mainProductDesc: '',
    productElementDetails: '',
    productDetailsNEW: '',
    product__category: 'Uncategorized',
    product__section: 'Weekly Food Offers',
    prodSubCartigory: '',
    src: [],
    productImgLeft: '',
    productPoster: '',
    productYoutubeLink: '',
    productSupremeQualityDetails: ''
  });

  const PostCategories = [
    'Vegetables', 'Fresh Fruits', 'Fresh Drink', 'Fresh Bakery', 'Biscuits Snacks', 'Fresh Meat', 'Fresh Milk'
  ];

  const PostSection = [
            'Weekly Food Offers', 
            'New Arrivals', 
            'Features', 
            'Best Rate', 
            'Top Trending Products'
  ]
  const [src, setSrc] = useState(null);
  const [productImgLeft, setproductImgLeft] = useState('');
  const [isPending, setIsPending] = useState(false);
  const [url, setUrl] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const uploadImage = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/v1/products/upload-product-images-desc', productImgLeft);
      console.log(response)
      const imageUrl = response.data?.data?.secure_url;
      console.log(imageUrl)
      setPostDetails((prev) => ({ ...prev, productImgLeft: imageUrl }));
      toast.success(response.data.msg);
      return imageUrl
    } catch (error) {
      toast.error(error.msg);
      console.error(error);
    }
  
  };

  const uploadMainProductImage = async () => {
    try {
      setIsPending(true)
      const response = await axios.post('http://localhost:5000/api/v1/products/upload-multiple-product-images', src);

      console.log("line 69",response)
      const imageUrl = response.data?.data?.map(item => item);
      setPostDetails((prev) => ({ ...prev, src: imageUrl }));
      toast.success(response.data.msg);
      setIsPending(false)
      return imageUrl
    } catch (error) {
      toast.error(error.msg);
      console.error(error);
      setIsPending(false)
    }
  
    };

  const handleImageChange = (e) => {
    const files = e.target.files;
    if (files.length > 3) {
      alert('You can only upload up to 3 images.');
      return;
    }
    const formData = new FormData()
    const imgList = files.length > 0 && Array.from(files).forEach((file)=>formData.append("src", file)) 
    console.log(imgList)
    setSrc(formData);
  };

  const handleMainProductImage = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('productImgLeft', file);
    setproductImgLeft(formData);
    const url = URL.createObjectURL(file);
    setUrl(url);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

   
    try {
      setIsPending(true);
      const imgUrl = await uploadImage();
      const images = await uploadMainProductImage();
      console.log(images)
      console.log(postDetails)  
      const response = await axios.post('http://localhost:5000/api/v1/products/', {...postDetails, src:images, productImgLeft: imgUrl});
      toast.success(response.data.msg);
      setIsPending(false);
    } catch (err) {
      setIsPending(false);
      console.error(err);
      toast.error(err.msg);
    }
  };

  return (
    <div className='Signup'>
      <h1>Add Product</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="input-row">
          <span>
            <select name="product__category" value={postDetails.product__category} onChange={handleChange}>
              {PostCategories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </span>
          <span>
            <input type="text" name="product__name" value={postDetails.product__name} onChange={handleChange} placeholder="Product Name" />
          </span>
          <span>
            <input type="number" name="productRating" value={postDetails.productRating} onChange={handleChange} placeholder="Product Rating" />
          </span>
        </div>
        <div className="input-row">
          <span>
            <input type="number" name="price" value={postDetails.price} onChange={handleChange} placeholder="Price" />
          </span>
          <span>
            <input type="number" name="old__price" value={postDetails.old__price} onChange={handleChange} placeholder="Old Price" />
          </span>
          <span>
            <input type="text" name="shop" value={postDetails.shop} onChange={handleChange} placeholder="No of products sold" />
          </span>
        </div>
        <div className="input-row">
          <span>
            <input type="number" name="desc" value={postDetails.desc} onChange={handleChange} placeholder="e.g -50%" />
          </span>
          <span>
            <input type="text" name="badge" value={postDetails.badge} onChange={handleChange} placeholder="Badge" />
          </span>
          <span>
            <input type="number" name="NumberLeft" value={postDetails.NumberLeft} onChange={handleChange} placeholder="Number Left" />
          </span>
        </div>
        <div className="input-row">
          <span>
            <input type="text" name="type" value={postDetails.type} onChange={handleChange} placeholder="Type of Product" />
          </span>
          <span>
            <input type="text" name="mfg" value={postDetails.mfg} onChange={handleChange} placeholder="Manufacturing Date" />
          </span>
          <span>
            <input type="number" name="life__span" value={postDetails.life__span} onChange={handleChange} placeholder="Lifespan" />
          </span>
        </div>
        <div className="input-row">
          <span>
            <input type="text" name="brandName" value={postDetails.brandName} onChange={handleChange} placeholder="Orfarm" />
          </span>
          <span>
            <input type="text" name="featurePro" value={postDetails.featurePro} onChange={handleChange} placeholder="Product Features" />
          </span>
          <span>
            <input type="number" name="ratings" value={postDetails.ratings} onChange={handleChange} placeholder="Ratings" />
          </span>
        </div>
        <div className="input-row">
          <span>
            <input type="text" name="prodSubCartigory" value={postDetails.prodSubCartigory} onChange={handleChange} placeholder="Product Sub Category" />
          </span>
          <span>
            <input type="file" accept="image/png, image/jpeg" multiple onChange={handleImageChange} placeholder="Full Image" />
          </span>
          <span>
            <input type="file" accept="image/png, image/jpeg" onChange={handleMainProductImage} placeholder="Product Left Images" />
          </span>
        </div>
        <div className="input-row">  
        <span>
            <select name="product__section" value={postDetails.product__section} onChange={handleChange}>
              {PostSection.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </span>
          <span>
            <input type="text" name="productYoutubeLink" value={postDetails.productYoutubeLink} onChange={handleChange} placeholder="Product YouTube Link" />
          </span>
        </div>
        <div className="textarea-row first">
          <span>
            <ReactQuill value={postDetails.mainProductDesc} onChange={(value) => setPostDetails(prevState => ({ ...prevState, mainProductDesc: value }))} placeholder="Product Description" />
          </span>
          <span>
            <ReactQuill value={postDetails.productElementDetails} onChange={(value) => setPostDetails(prevState => ({ ...prevState, productElementDetails: value }))} placeholder="Product Elements" />
          </span>
        </div>
        <div className="textarea-row">
          <span>
            <ReactQuill value={postDetails.productDetailsNEW} onChange={(value) => setPostDetails(prevState => ({ ...prevState, productDetailsNEW: value }))} placeholder="Product Details (NEW)" />
          </span>
          <span>
            <ReactQuill value={postDetails.productSupremeQualityDetails} onChange={(value) => setPostDetails(prevState => ({ ...prevState, productSupremeQualityDetails: value }))} placeholder="Product Supreme Quality Details" />
          </span>
        </div>
        <button>{isPending ? 'Posting...' : 'POST PRODUCT'}</button>
      </form>
    </div>
  );
};

export default CreatePost;