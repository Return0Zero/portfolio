import React from 'react';
import './footer.css';

import Mountain1 from '../../images/hero-section/mountain1.svg'
import Mountain2 from '../../images/hero-section/mountain2.svg'

const Footer = () => {
    return (
        <div className='footer-section'>
            <div className='mountain1-container'>                    
                <img src={Mountain1} alt='Mountain1' className='mountain1' />
            </div>
            <div className='mountain2-container'>                    
                <img src={Mountain2} alt='Mountain2' className='mountain2' />
            </div>
            <p>© 2022 Return Zero. All Rights Reserved</p>
        </div>
    )
}

export default Footer;
