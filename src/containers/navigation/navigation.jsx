import React from 'react';
import './navigation.css';
import LogoDbWf from '../../images/icons/logo-DarkB-WhiteF.svg';
import AboutMeIcon from '../../images/icons/about-me.svg';
import ProjectsIcon from '../../images/icons/programming.svg';

const Navigation = () => {
    return (
        <div className='navigation-section'>
            <div className='navigation-elements'>
                <a href='#'><img src={LogoDbWf} alt='Logo' className='navigation--logo'/></a>
                <div className='navigation--separation-bar'></div>
                <a href='#'><img src={AboutMeIcon} alt='About me icon' className='navigation--icon'/></a>
                <div className='navigation--separation-bar'></div>
                <a href='#'><img src={ProjectsIcon} alt='Projects icon' className='navigation--icon'/></a>
            </div>
            <a className='CTA-button' href='#'>
                <p>Contact Me</p>
            </a>
        </div>
    )
}

export default Navigation;
