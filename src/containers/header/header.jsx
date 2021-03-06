import React from 'react';
import './header.css';
import ReturnZero from '../../images/titles/return-zero.svg';
import Mountains from '../../images/hero-section/mountains.svg';
import Rays from '../../images/hero-section/rays.svg';
import Typewriter from 'typewriter-effect';


const Header = () => {
    return (
        <div className='header-section'>
            <div className='circle-grad'>
                <div className='header-container'>
                    <img src={ReturnZero} alt="Return Zero Title" className="returnzero-title"/>
                    <img src={Mountains} alt="background mountains" className="bg-mountains"/>
                </div>
            </div>
            <div className='linear-grad'>
                <img src={Rays} alt="background rays" className="bg-rays"/>
                <div className='web-developer'>
                    <Typewriter 
                        options={{
                            strings: ['Web Developer', 'Web Designer'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Header;
