import React from 'react';
import './skills.css';
import SkillsTitle from '../../images/titles/skills.svg';
import SkillsInfo from '../../components/skills--info/skills--ux-info';
import SkillsArtInfo from '../../components/skills--info/skills--info';

const skills = () => {
    return (
        <div className='skills-section'>
            <img src={SkillsTitle} alt='skills title' className='skills-title'/>
            <div className='skills--info-container'>
                <SkillsArtInfo />
                <SkillsInfo />
            </div>
        </div>
    )
}

export default skills;
