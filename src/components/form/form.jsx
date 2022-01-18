import React from 'react';
import './form.css';

const Form = () => {
    return (
        <form className='form--container' name="contact-form" method="POST"  data-netlify="true">
            
                <input className='input' type='text' placeholder='Name' name='name' required/>
                <input className='input' type='email' placeholder='Email' name='emil' required/>
                <input className='input' type='text' placeholder='Subject' name='subject' required/>
                <textarea className='input' type='text' placeholder='Message' name='message' required/>
                <input className='input-button' type='submit' value='Submit' required/>
        </form>
    )
}

export default Form;
