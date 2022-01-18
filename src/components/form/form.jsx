import React from 'react';
import './form.css';

const Form = () => {
    return (
        <form className='form--container' name="contact-form" method="POST"  data-netlify="true">
            <div>
                <label hidden>Name</label>
                <input className='input' type='text' placeholder='Name' name='name' required/>
            </div>
            <div>
                <label hidden>Email</label>
                <input className='input' type='email' placeholder='Email' name='emil' required/>
            </div>
            <div>
                <label hidden>Subject</label>
                <input className='input' type='text' placeholder='Subject' name='subject' required/>
            </div>
            <div>
                <label hidden>Message</label>
                <textarea className='input' type='text' placeholder='Message' name='message' required/>
            </div>
            <div>
                <label hidden>Submit</label>
                <input className='input-button' type='submit' value='Submit' required/>
            </div>
        </form>
    )
}

export default Form;
