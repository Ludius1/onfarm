import React from 'react'
import '.././aboutUs/aboutUs.css'

const ContactUs = () => {
  return (
    <div className="Signup">
    <span>Home /<small>Contact Us</small></span>
            <div className="sgnup__section">
            <span className="head--">
                        <small>CONTACT US</small>
                        <span>Looking For Orfarm?</span>
                        <h5>The liber tempor cum soluta nobis eleifend option congue doming quod mazim.</h5>
                    </span>

                    <div className="contact__us-sect">
                        <span>
                            <img src="" alt="" />
                            <h4>RUE PELLEPORT - PARIS</h4>
                            <small>Add: Heaven Stress, Beverly Melbourne</small>
                            <small>Phone: (+100) 123 456 7890</small>
                            <small>Email: Orfarm@google.com</small>             
                        </span>
                    </div>
            </div>

            <div className="map-aread">
                <div className="map">
                    

                    <div className="reply--sect">
                        <h4>LEAVE A REPLY</h4>
                        <small>Your email address will not be published. Required fields are marked *</small>

                        <div className="table">
                            <form action="">
                            <span>
                                <input type="text" placeholder='your Name'/>
                                <input type="text" placeholder='Your Email'/>
                            </span>
                            <span>
                                <input type="text" placeholder='Subject'/>
                                <input type="text" placeholder='Phone'/>
                            </span>

                            <textarea name="" id="" placeholder='message'>
                                
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