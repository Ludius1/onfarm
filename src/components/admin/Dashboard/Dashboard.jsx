import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'sonner';
import './dashboard.css';

const Dashboard = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [content, setContent] = useState('');
    const [newContent, setNewContent] = useState('');
  
  
  
    const updateNotification = async () => {
      const response = await axios.post('https://neworfarm-1.onrender.com/products/notification', { content: newContent });
      setContent(response.data.content);
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://neworfarm-1.onrender.com/products/');
                setAllProducts(response.data);
            } catch (error) {
                console.error('Failed to fetch products:', error);
            }
        };

        fetchProducts();
    }, []);

    const handleDelete = async (productId) => {
        try {
            await axios.delete(`https://neworfarm-1.onrender.com/products/${productId}`);
            setAllProducts(allProducts.filter(product => product._id !== productId));
            toast.success('Product deleted successfully');
        } catch (error) {
            console.error('Error deleting product:', error);
            toast.error('Failed to delete product');
        }
    };

    return (
        <div className="Signup">
            <div className="Dashboard">
                <div className="headd">
                    <h4>Admin Dashboard</h4>

                    <div className="left__dashboard">
                        <div className="btn--fgr">
                            <button>
                                <Link to='/admin/create-product'>Add Products</Link>
                            </button>
                         
                            

      <input className='innnnns'
        type="text"
        value={newContent}
        placeholder='Input new notification here'
        onChange={(e) => setNewContent(e.target.value)}
      />
      <button onClick={updateNotification}>Update Notification</button>

                        </div>
                    </div>
                </div>

                <div className='All__dashboard'>
                    <div className="right__dashboard">
                        {allProducts.map(cardData => {
                            const imgSrc = cardData.prdDetailsId?.src?.[0]; 

                            return (
                                <div key={cardData._id} className="dashboard_post">
                                    <div className="dashboard__post-info">
                                        <div className="dashboard__post-thumbnail">
                                            {imgSrc ? (
                                                <img src={imgSrc} alt={cardData.product__name} />
                                            ) : (
                                                <img src="default-image-url.jpg" alt="Default" />
                                            )}
                                        </div>

                                        <h5 className="post__title">{cardData.product__name || "Unnamed Product"}</h5>
                                    </div>

                                    <div className="dashboard-post-action">
                                        <Link to={`/admin/create-product/${cardData._id}`} className='btn--view'>Edit</Link>
                                        <Link to={`/shopdetails/${cardData._id}`} className='btn--view'>View</Link>
                                        <button onClick={() => handleDelete(cardData._id)} className='btn--delete'>Delete</button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        
        </div>
    );
}

export default Dashboard;
