import React from 'react'
import './../signup/signup.css'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
import { FiUserPlus } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { LuUser2 } from "react-icons/lu";
import { AiOutlineMail } from "react-icons/ai";
import { LuKeyRound } from "react-icons/lu";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Link } from 'react-router-dom'
import { CiLogin } from "react-icons/ci";
import Cart from '../cart/Cart';

const LoginPage = () => {

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

           <form>
               <div className="form__head">

                   <span className='each__field'>
                       <small><FiUser className='fild___icon'/></small>
                       <input type="text" placeholder='Username / email address' />
                   </span>

                   <span  className='each__field'>
                       <small><LuKeyRound className='fild___icon'/></small>
                       <input type="password" placeholder='Password' />
                   </span>
               </div>
               <div className="login__bottom">
                        <span>
                            <input type="checkbox" name="" id="" />
                            <small  className='remeber'>Remember me</small>
                        </span>
                         <small><Link to='/Login'> Forget Password</Link></small>
               </div>
               <button className='btn'>Login Now <MdOutlineArrowRightAlt className='btn__icon'/></button>
           </form>
       </div>
       <Cart/>
    </div>
</div>
  )
}

export default LoginPage