import React from 'react';
import './form.css';

const Form = () => {
    return (
        <form className='form--container'>
            <div>
                <label hidden>Name</label>
                <input className='input' type='text' placeholder='Name' required/>
            </div>
            <div>
                <label hidden>Email</label>
                <input className='input' type='text' placeholder='Email' required/>
            </div>
            <div>
                <label hidden>Subject</label>
                <input className='input' type='text' placeholder='Subject' required/>
            </div>
            <div>
                <label hidden>Message</label>
                <input className='input' type='text' placeholder='Message' required/>
            </div>
            <div>
                <label hidden>Submit</label>
                <input className='input-button' type='button' value='Submit' required/>
            </div>
        </form>
    )
}

export default Form;
