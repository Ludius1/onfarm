import React, { useState, useEffect } from 'react';
import FeaturedBrand1 from '../../assets/brand-thumb-1.png';
import Vscode from '../../assets/vscode.png';
import { FaEdit } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa6';
import { CiLock } from 'react-icons/ci';
import { FaRegUser } from 'react-icons/fa6';
import { FiUserPlus } from 'react-icons/fi';
import { FiUser } from 'react-icons/fi';
import { LuUser2 } from 'react-icons/lu';
import { AiOutlineMail } from 'react-icons/ai';
import { toast } from 'sonner';
import { LuKeyRound } from 'react-icons/lu';
import { MdOutlineArrowRightAlt } from 'react-icons/md';
import './userProfile.css';
import axios from 'axios'


const UserProfile = () => {
    window.scrollTo(0, 0);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: ''
    });
    const [formAvatar, setFormAvatar] = useState({ avatar: null  });
    const [isLoading, setIsLoading] = useState(false);

    // Fetch user data on component mount
    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        try {
            const response = await axios.get('https://neworfarm-1.onrender.com/user/getuser', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}` // retrieve token from localStorage or wherever you store it
                }
            });
            setFormData({
                firstName: response.data.firstName,
                lastName: response.data.lastName,
                userName: response.data.userName,
                email: response.data.email
            });
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'avatar' && files) {
            setFormAvatar({ avatar: files[0] });
        } else {
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('No token found');
            }
            
            const formDataWithAvatar = new FormData();
            formDataWithAvatar.append('avatar', formAvatar.avatar);
            formDataWithAvatar.append('firstName', formData.firstName);
            formDataWithAvatar.append('lastName', formData.lastName);
            formDataWithAvatar.append('userName', formData.userName);
            formDataWithAvatar.append('email', formData.email);
            formDataWithAvatar.append('currentPassword', formData.currentPassword);
            formDataWithAvatar.append('newPassword', formData.newPassword);
            formDataWithAvatar.append('confirmNewPassword', formData.confirmNewPassword);

            // const response = await axios.patch('http://localhost:5000/api/v1/user/update-user', formDataWithAvatar, {
            //     headers: {
            //         Authorization: `Bearer ${token}`,
            //         'Content-Type': 'multipart/form-data'
            //     }
            // });

            if (response.status === 200) {
                console.log(response);
                toast.success(response.data.msg);

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
            <div className="user--profile">
                <h4>Personal details</h4>
                <div className="profile--">
                    <div className="persosnal__details">
                        <div className="profile__avataer">
                            <img src={FeaturedBrand1} alt="" />
                        </div>

                        <form action="" className="fomm__profile">
                            <div className="avatar__form">
                                <label htmlFor="avatar"><FaEdit /></label>
                                <input hidden type="file" name="avatar" id="avatar" onChange={handleChange} accept="image/png, image/jpg, image/jpeg" />
                                {formAvatar.avatar && (
                                    <img src={URL.createObjectURL(formAvatar.avatar)} alt="Avatar Preview" />
                                )}
                            </div>
                        </form>
                        <h1>Ludius Admin</h1>
                    </div>

                    <form action="" onSubmit={handleSubmit} className="user__profile__input_-form">
                        <span className="each__field">
                            <small><FiUser className="fild___icon" /></small>
                            <input type="text" name="firstName" value={formData.firstName} placeholder="First Name" onChange={handleChange} />
                        </span>

                        <span className="each__field">
                            <small><FiUserPlus className="fild___icon" /></small>
                            <input type="text" name="lastName" value={formData.lastName} placeholder="Last Name" onChange={handleChange} />
                        </span>

                        <span className="each__field">
                            <small><LuUser2 className="fild___icon" /></small>
                            <input type="text" name="userName" value={formData.userName} placeholder="Username" onChange={handleChange} />
                        </span>

                        <span className="each__field">
                            <small><AiOutlineMail className="fild___icon" /></small>
                            <input type="email" name="email" value={formData.email} placeholder="Email address" onChange={handleChange} />
                        </span>

                        <span className="each__field">
                            <small><LuKeyRound className="fild___icon" /></small>
                            <input type="password" name="currentPassword" value={formData.currentPassword} placeholder="Current Password" onChange={handleChange} />
                        </span>

                        <span className="each__field">
                            <small><LuKeyRound className="fild___icon" /></small>
                            <input type="password" name="newPassword" value={formData.newPassword} placeholder="New Password" onChange={handleChange} />
                        </span>

                        <span className="each__field">
                            <small><LuKeyRound className="fild___icon" /></small>
                            <input type="password" name="confirmNewPassword" value={formData.confirmNewPassword} placeholder="Confirm Password" onChange={handleChange} />
                        </span>

                        <button>{isLoading ? 'Is Updating...' : 'Update Details'}</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;