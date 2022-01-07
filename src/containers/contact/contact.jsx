import React from 'react';
import './contact.css';
import ContactTitle from '../../images/titles/contact-me.svg';
import Form from '../../components/form/form';

//contact me images

import Phone2 from '../../images/icons/contact-me-icons/phone.svg'
import Phone from '../../images/icons/contact-me-icons/phone2.svg'
import Linkedin2 from '../../images/icons/contact-me-icons/linkedin.svg'
import Linkedin from '../../images/icons/contact-me-icons/linkedin2.svg'
import Github2 from '../../images/icons/contact-me-icons/github.svg'
import Github from '../../images/icons/contact-me-icons/github2.svg'
import Youtube2 from '../../images/icons/contact-me-icons/youtube.svg'
import Youtube from '../../images/icons/contact-me-icons/youtube2.svg'
import Facebook2 from '../../images/icons/contact-me-icons/facebook.svg'
import Facebook from '../../images/icons/contact-me-icons/facebook2.svg'
import Instagram2 from '../../images/icons/contact-me-icons/instagram.svg'
import Instagram from '../../images/icons/contact-me-icons/instagram2.svg'

//background images

import Mountain1 from '../../images/hero-section/mountain1.svg'
import Mountain2 from '../../images/hero-section/mountain2.svg'

const Contact = () => {
    return (
        <div className='contact--section' id='contactID'>
            
            <img src={ContactTitle} alt='skills title' className='contact--title'/>
            <div className='contact--info-container'>
                <div className='contact--form'>
                    <Form />
                </div>
                <div className='contact--info'>
                        <div className='contact--contact'>
                            <h3>Contact Me</h3>
                            <div className='contact--contact-icon-container'>
                                <div className='contact-first-container'>
                                    <img src={Phone} alt="phone" className='phone phone-front'/>
                                    <img src={Phone2} alt="phone2" className='phone2 phone-back'/>
                                </div>
                                <div className='contact-second-container'>
                                    <img src={Linkedin} alt="linkedin" className='linkedin img-front'/>
                                    <img src={Linkedin2} alt="linkedin2" className='linkedin2 img-back'/>
                                </div>
                                <div className='contact-third-container'>
                                    <img src={Github} alt="github" className='github img-front'/>
                                    <img src={Github2} alt="github2" className='github2 img-back'/>
                                </div>
                            </div>
                        </div>
                        <div className='contact--social'>
                            <h3>ReturnZero's Social Media</h3>
                            <div className='contact--social-icon-container'>
                                <div className='social-first-container'>
                                    <img src={Youtube} alt="youtube" className='youtube img-front'/>
                                    <img src={Youtube2} alt="youtube2" className='youtube2 img-back'/>
                                </div>
                                <div className='social-second-container'>
                                    <img src={Facebook} alt="facebook" className='facebook img-front'/>
                                    <img src={Facebook2} alt="facebook2" className='facebook2 img-back'/>
                                </div>
                                <div className='social-third-container'>
                                    <img src={Instagram} alt="instagram" className='instagram img-front'/>
                                    <img src={Instagram2} alt="instagram2" className='instagram2 img-back'/>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
