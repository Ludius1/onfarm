import React, { useState } from 'react'
import './../signup/signup.css'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
import { FiUserPlus } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { LuUser2 } from "react-icons/lu";
import { AiOutlineMail } from "react-icons/ai";
import { useNavigate } from 'react-router-dom'
import {toast} from 'sonner'
import axios from 'axios'
import { LuKeyRound } from "react-icons/lu";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Link } from 'react-router-dom'
import Cart from '../cart/Cart';


const Signup = () => {
    window.scrollTo(0,0)
   const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    confirmPassword: ''
   })
   const[isLoading, setIsLoading] = useState(false)
   const navigateTo = useNavigate()

   const handlechange = (e) => {
    setUserData(prevState => {
        return{...prevState, [e.target.name]: e.target.value}
    })
   }
   const handleSubmit = async (e) => {
    event.preventDefault()
    console.log(userData)
    setIsLoading(true)
    try {
       const response = await axios.post('http://localhost:5000/api/v1/user/signup', userData)
        
       if (response.status === 200) {
        console.log(response)
        toast.success(response.data.msg)
        setIsLoading(false)
        navigateTo('/login') 
      }
    } catch (error) {
        if (error.response && error.response.data && error.response.data.msg) {
            toast.error(error.response.data.msg);
        } else {
            toast.error('An unexpected error occurred.');
        }
    } finally {
        setIsLoading(false);
    }
  };
  return (
    <div className="Signup">
             <span>Home /<small>Signup</small></span>

             <div className="signup__cont">
                <div className="signup__area">
                    <span className="signup__head">
                        <span className='sigin__icon'><CiLock className='fild___icon__head'/></span>
                        <small>
                            <h3>Signup Here</h3>
                            <span>Your personal data will be used to support your experience throughout this website, to manage access to your account.</span>
                        </small>
                    </span>

                    <form onSubmit={handleSubmit}>
                        <div className="form__head">
        
                            <span className='each__field'>
                                <small><FiUser className='fild___icon'/></small>
                                <input type="text" name='firstName' value={userData.firstName} placeholder='First Name' onChange={handlechange} />
                            </span>

                            <span className='each__field'>
                                <small><FiUserPlus className='fild___icon'/></small>
                                <input type="text" name='lastName' value={userData.lastName} placeholder='Last Name'  onChange={handlechange} />
                            </span>
                            
                            <span className='each__field'>
                                <small><LuUser2 className='fild___icon'/></small>
                                <input type="text" name='userName' value={userData.userName} placeholder='Username'  onChange={handlechange} />
                            </span>

                            <span  className='each__field'>
                                <small><AiOutlineMail className='fild___icon'/></small>
                                <input type="email" name='email' value={userData.email} placeholder='Email address'  onChange={handlechange} />
                            </span>
                            <span  className='each__field'>
                                <small><LuKeyRound className='fild___icon'/></small>
                                <input type="password" name='password' value={userData.password} placeholder='Password'  onChange={handlechange} />
                            </span>

                            <span  className='each__field'>
                                <small><LuKeyRound className='fild___icon'/></small>
                                <input type="password" name='confirmPassword' value={userData.confirmPassword} placeholder='Confirm Password'  onChange={handlechange} />
                            </span>
                        </div>
                        <small><Link to='/Login'> Already Have Account?</Link></small>
                        <button>{isLoading? 'Registering...' : 'Register Now'} <MdOutlineArrowRightAlt className='btn__icon'/></button>
                    </form>
                </div>
              
             </div>
    </div>
  )
}

export default Signup