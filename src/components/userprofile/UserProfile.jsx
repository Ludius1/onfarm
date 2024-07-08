import React, { useState } from 'react'
import FeaturedBrand1 from '../../assets/brand-thumb-1.png'
import { FaEdit } from 'react-icons/fa'
import { FaCheck } from 'react-icons/fa6'
import { CiLock } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
import { FiUserPlus } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { LuUser2 } from "react-icons/lu";
import { AiOutlineMail } from "react-icons/ai";
import {toast} from 'sonner'
import { LuKeyRound } from "react-icons/lu";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const UserProfile = () => {
    const [avatar, setavatar] = useState(FeaturedBrand1)
    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [userName, setuserName] = useState('')
    const [email, setemail] = useState('')
    const [CurrentPassword, setCurrentPassword] = useState('')
    const [newPassword, setnewPassword] = useState('')
    const [confirmnewPassword, setconfirmnewPassword] = useState('')
  return (
    <div className="Signup">
        <h4>Personal details</h4>
        <div className="persosnal__details">
                <div className="profile__avataer">
                    <img src={FeaturedBrand1} alt="" />
                </div>

                <form action="">
                        <div className="avatar__form">
                            <input type="file" name='avatar' id='avatar' onChange={e => setavatar(e.target.files[0])} accept='png. jpg, jpeg'/>
                            <label htmlFor="avatar"><FaEdit/></label>
                        </div>
                </form>
                <button><FaCheck/></button>
        </div>
        <h1>Ludius Admin</h1>

        <form action="">
            {/* toast */}
                <span className='each__field'>
                    <small><FiUser className='fild___icon'/></small>
                    <input type="text" name='firstName' value={firstName} placeholder='First Name' onChange={setfirstName} />
                </span>

                <span className='each__field'>
                    <small><FiUserPlus className='fild___icon'/></small>
                    <input type="text" name='lastName' value={lastName} placeholder='Last Name'  onChange={setlastName} />
                </span>
                
                <span className='each__field'>
                    <small><LuUser2 className='fild___icon'/></small>
                    <input type="text" name='userName' value={userName} placeholder='Username'  onChange={setuserName} />
                </span>

                <span  className='each__field'>
                    <small><AiOutlineMail className='fild___icon'/></small>
                    <input type="email" name='email' value={email} placeholder='Email address'  onChange={setemail} />
                </span>
                <span  className='each__field'>
                    <small><LuKeyRound className='fild___icon'/></small>
                    <input type="password" name='password' value={CurrentPassword} placeholder='Password'  onChange={setCurrentPassword} />
                </span>

                <span  className='each__field'>
                    <small><LuKeyRound className='fild___icon'/></small>
                    <input type="password" name='password' value={newPassword} placeholder='Confirm Password'  onChange={setnewPassword} />
                </span>
                <span  className='each__field'>
                    <small><LuKeyRound className='fild___icon'/></small>
                    <input type="password" name='password' value={confirmnewPassword} placeholder='Confirm Password'  onChange={setconfirmnewPassword} />
                </span>
                <button>Update Details</button>
        </form>
    </div>
  )
}

export default UserProfile