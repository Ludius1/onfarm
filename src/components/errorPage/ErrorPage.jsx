import React from 'react'
import { Link } from 'react-router-dom'
import Errshape from './../../assets/erorr.png'
import Err from './../../assets/erorr-shape.png'
import './errorPage.css'


const ErrorPage = () => {
  window.scrollTo(0,0)
  return (
    <div className="errorPage">
        <div className="eror__cont">
        <img src={Errshape} alt="" /> 
        <img className='shaoee' src={Err} alt="" />
        <h1>Oops...That link is broken.</h1>
        <small>Sorry for the inconvenience. Go to our homepage or check out our latest collections.</small>
        <Link className='Linkkk' to='/'> BACK TO HOMEPAGE</Link>
        </div>
    </div>
  )
}

export default ErrorPage




