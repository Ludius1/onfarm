import React from 'react'
import '.././contactUs/contactUs.css'
import Contact1 from './../../assets/contact-big-bg1.jpg'
import Contact2 from './../../assets/contact-big-bg2.jpg'
import Contact3 from './../../assets/contact-big-bg3.jpg'
import Contact4 from './../../assets/contact-big-bg4.jpg'


const ContactUs = () => {
  return (
    <div className="Signup">
    <span>Home / <small>Contact Us</small></span>
            <div className="sgnup__section">
            <span className="head--">
                        <small>CONTACT US</small>
                        <span>Looking For Orfarm?</span>
                        <h5>The liber tempor cum soluta nobis eleifend option congue doming quod mazim.</h5>
                    </span>

                    <div className="contact__us-sect">
                        <span>
                            <img src={Contact1} alt="" />
                            <h4>RUE PELLEPORT - PARIS</h4>
                            <small>Add: Heaven Stress, Beverly Melbourne</small>
                            <small>Phone: (+100) 123 456 7890</small>
                            <small>Email: Orfarm@google.com</small>             
                        </span>
                        <span>
                            <img src={Contact2} alt="" />
                            <h4>RUE PELLEPORT - PARIS</h4>
                            <small>Add: Heaven Stress, Beverly Melbourne</small>
                            <small>Phone: (+100) 123 456 7890</small>
                            <small>Email: Orfarm@google.com</small>             
                        </span>
                        <span>
                            <img src={Contact3} alt="" />
                            <h4>RUE PELLEPORT - PARIS</h4>
                            <small>Add: Heaven Stress, Beverly Melbourne</small>
                            <small>Phone: (+100) 123 456 7890</small>
                            <small>Email: Orfarm@google.com</small>             
                        </span>
                        <span>
                            <img src={Contact4} alt="" />
                            <h4>RUE PELLEPORT - PARIS</h4>
                            <small>Add: Heaven Stress, Beverly Melbourne</small>
                            <small>Phone: (+100) 123 456 7890</small>
                            <small>Email: Orfarm@google.com</small>             
                        </span>
                    </div>
            </div>

            <div className="map-aread">
                <div className="map">
                    <div className="embed--map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d56215.718841453985!2d-0.19959027821222705!3d51.48739183082915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1slondon%20eye!5e0!3m2!1sen!2sbd!4v1656749326947!5m2!1sen!2sbd" ></iframe>
                    </div>

                    <div className="reply--sect">
                        <h4>LEAVE A REPLY</h4>
                        <small>Your email address will not be published. Required fields are marked *</small>

                        <div className="table--table">
                            <form action="">
                            <span>
                                <input type="text" placeholder='Your Name'/>
                                <input type="text" placeholder='Your Email'/>
                            </span>
                            <span>
                                <input type="text" placeholder='Subject'/>
                                <input type="text" placeholder='Phone'/>
                            </span>

                            <textarea name="" id="" placeholder='Message'>
                                
                            </textarea>

                            <small>
                                <input type="radio" name="" id="" />
                                <label htmlFor="">I am bound by the terms of the Service I accept Privacy Policy.</label>
                            </small>
                            <button>SEND MESSAGE</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default ContactUs