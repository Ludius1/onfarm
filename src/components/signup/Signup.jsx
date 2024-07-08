import React, { useState } from 'react'
import './../signup/signup.css'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
import { FiUserPlus } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { LuUser2 } from "react-icons/lu";
import { AiOutlineMail } from "react-icons/ai";
import {toast} from 'sonner'
import { LuKeyRound } from "react-icons/lu";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Link } from 'react-router-dom'
import Cart from '../cart/Cart';


const Signup = () => {
   const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    password2: ''
   })

   const handlechange = (e) => {
    setUserData(prevState => {
        return{...prevState, [e.target.name]: e.target.value}
    })
   }
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

                    <form>
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
                                <input type="password" name='password' value={userData.password} placeholder='Confirm Password'  onChange={handlechange} />
                            </span>
                        </div>
                        <small><Link to='/Login'> Already Have Account?</Link></small>
                        <button>Register Now <MdOutlineArrowRightAlt className='btn__icon'/></button>
                    </form>
                </div>
              
             </div>
    </div>
  )
}

export default Signup