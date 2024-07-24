import React, { useContext } from 'react'
import './../signup/signup.css'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
import { FiUserPlus } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { LuUser2 } from "react-icons/lu";
import { useState } from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { LuKeyRound } from "react-icons/lu";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Link } from 'react-router-dom'
import { CiLogin } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import Cart from '../cart/Cart';
import {toast} from 'sonner'
import axios from 'axios'
import { AuthContext } from '../../context/authContext';


const LoginPage = () => {
    window.scrollTo(0,0)
    const [userData, setUserData] = useState({
        // userName: '',
        email: '',
        password: '',
       })
       const [isLoading, setIsLoading] = useState(false);
       const navigateTo = useNavigate();

       const {login, token, user} = useContext(AuthContext)
       console.log(token, user)
    
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
           const response = await axios.post('http://localhost:5000/api/v1/user/login', userData)
            
           if (response.status === 200) {
            console.log(response)
            toast.success(response.data?.msg);
            const user = response.data.data
            setIsLoading(false)
            const token = response.data?.token;
            console.log(token)
            login(user, token)
            // localStorage.setItem('token', token);
            navigateTo('/'); 
          }
        } catch (error) {
          console.error(error);
          setIsLoading(false);
          toast.success(error.response.data.msg || 'Login failed')
        }
      };

  return (
    <div className="Signup">
    <span>Home /<small>Login</small></span>

    <div className="signup__cont">
       <div className="signup__area">
           <span className="signup__head">
               <span className='sigin__icon'><CiLogin className='fild___icon__head'/></span>
               <small>
                   <h3>Login Here</h3>
                   <span>Your personal data will be used to support your experience throughout this website, to manage access to your account.</span>
               </small>
           </span>

           <form onSubmit={handleSubmit}>
               <div className="form__head">

                   <span className='each__field'>
                       <small><FiUser className='fild___icon'/></small>
                       <input type="text" name='email' value={userData.email} onChange={handlechange} placeholder='Username / email address' autoFocus />
                   </span>

                   <span  className='each__field'>
                       <small><LuKeyRound className='fild___icon'/></small>
                       <input type="password" name='password' value={userData.password} onChange={handlechange} placeholder='Password' />
                   </span>
               </div>
               <div className="login__bottom">
                        <span>
                            <input type="checkbox" name="" id="" />
                            <small  className='remeber'>Remember me</small>
                        </span>
                         <small><Link to='/Login'> Forget Password</Link></small>
               </div>
               <button className='btn'>{isLoading ? 'Logging in...' : 'Login Now'} <MdOutlineArrowRightAlt className='btn__icon'/></button>
           </form>
       </div>
    </div>
</div>
  )
}

export default LoginPage