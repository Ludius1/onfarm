import React from 'react'
import { cardData } from '../../shop/ShoppData'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './dashboard.css'

const Dashboard = () => {
    const [allProducts, setAllProducts]= useState(cardData)
  
  return (
   <div className="Signup">
        <div className="Dashboard">

            <h4>Admin Dashboard</h4>

           <div className='All__dashboard'>
                <div className="left__dashboard">
                        <button>Add Products</button>
                        <button>Show All Products</button>
                        
                </div>

                <div className="right__dashboard">
                        {
                        allProducts.map( cardData => {
                            return <div key={cardData.id} className="dashboard_post">
                                <div className="dashboard__post-info">
                                    <div className="dashboard__post-thumbnail">
                                        <img src={cardData.src} alt="" />
                                    </div>

                                    <h5 className="post__title">{cardData.product__name}</h5>
                                </div>

                                <div className="dashboard-post-action">
                                    <Link to={`/products/${cardData.id}`} className='btn--view'>View</Link>
                                    <Link to={`/products/${cardData.id}/edit`} className='btn--view'>Edit</Link>
                                    <Link to={`/products/${cardData.id}/delete`} className='btn--delete'>Delete</Link>
                                </div>
                            </div>  
                        })
                    }
                </div>
           </div>
        </div>
   </div>
  )
}

export default Dashboard