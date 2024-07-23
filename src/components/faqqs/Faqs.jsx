import React, { useState } from 'react';
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import './faqs.css'


const Faqs = () => {

  const [expandedFaq, setExpandedFaq] = useState(null);

  
    const toggleExpansion = (faqIndex) => {
      setExpandedFaq(expandedFaq === faqIndex ? null : faqIndex);
    };

    const faqData = [
      {
        question: 'How much is shipping and how long will it take?',
        answer: 'The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        question: 'What is your return policy?',
        answer: 'Our return policy is simple and straightforward. If you are not satisfied with your purchase, you can return it within 30 days for a full refund or exchange.'
      },
      {
        question: 'How can I track my order?',
        answer: 'You can track your order using the tracking number provided in your shipping confirmation email. Visit our website and enter the tracking number to see the current status of your shipment.'
      },
      {
        question: 'Do you offer international shipping?',
        answer: 'Yes, we offer international shipping to many countries. Shipping fees and delivery times vary depending on the destination. Please check our shipping policy for more details.'
      },
      {
        question: 'Can I change or cancel my order?',
        answer: 'If you need to change or cancel your order, please contact our customer service team as soon as possible. Once the order has been processed and shipped, we are unable to make changes or cancellations.'
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept various payment methods including credit/debit cards, PayPal, and other secure payment options. All transactions are encrypted and secure for your protection.'
      }
    ];
    
  return (
    <div className="shop faqq___">
            <span>Home / <small>FAQs</small></span>

            <div className="faq__section">
                    
                    <div className="how_to __help">
                        <h2>How can we help you?</h2>

                        <small>Returns are free for orders shipped within the U.S. We include a UPS return label in every package which is at no cost to use.</small>
                       
                       <div className="in">
                       <span>Follow the steps below for a seamless returns process:</span>
                        <h4>– Please indicate a reason for return using one of the Return Codes listed on the order form included in your package.</h4>

                        <h4>– Attach your UPS return label to the outside of the package. There is no cost to use this label.</h4>
                        <h4>– Please make note of your tracking number so that you are able to track it on its way back to us</h4>
                        <h4>You will receive an email once your return has been processed. Please allow 06 – 12 business days from the time your package arrives back to us for a refund to be issued.</h4>
                       </div>
                    </div>

                    <div className="shopping__info">
                        <h4>Shopping Information</h4>

                        <div className="divider">
                  {faqData.map((faq, index) => (
                    <div className="faq1" key={index}>
                      <span onClick={() => toggleExpansion(index)}>
                        <h5>{faq.question}</h5>
                        <small className='smallicsi'>{expandedFaq === index ? <GoChevronUp /> : <GoChevronDown />}</small>
                      </span>
                      <div className={`faq-content ${expandedFaq === index ? 'expanded' : ''}`}>
                        <small>{faq.answer}</small>
                      </div>
                    </div>
                  ))}
                </div>
                    </div>
            </div>
    </div>  
  )
}

export default Faqs