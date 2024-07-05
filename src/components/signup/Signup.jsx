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
import Cart from '../cart/Cart';

const Signup = () => {
    window.scrollTo(0,0)
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
                                <input type="text" placeholder='First Name' />
                            </span>

                            <span className='each__field'>
                                <small><FiUserPlus className='fild___icon'/></small>
                                <input type="text" placeholder='Last Name' />
                            </span>
                            
                            <span className='each__field'>
                                <small><LuUser2 className='fild___icon'/></small>
                                <input type="text" placeholder='Username' />
                            </span>

                            {/* <span  className='each__field'>
                                <small><MdKeyboardDoubleArrowRight className='fild___icon'/></small>
                                <input type="number" placeholder='Phone Number' />
                            </span> */}

                            <span  className='each__field'>
                                <small><AiOutlineMail className='fild___icon'/></small>
                                <input type="email" placeholder='Email address' />
                            </span>
                            <span  className='each__field'>
                                <small><LuKeyRound className='fild___icon'/></small>
                                <input type="password" placeholder='Password' />
                            </span>

                            <span  className='each__field'>
                                <small><LuKeyRound className='fild___icon'/></small>
                                <input type="password" placeholder='Confirm Password' />
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