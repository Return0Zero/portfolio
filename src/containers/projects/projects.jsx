import React from 'react';
import './projects.css';
import ProjectsTitle from '../../images/titles/projects.svg';
import ProjComponent from '../../components/proj--component/proj--component';
import Asset2 from '../../images/background-designs/Asset2.svg';

const Projects = () => {
    return (
        <div className='projects--section' id='projectID'>
            <div className='asset2-container'>                    
                <img src={Asset2} alt='shape2' className='asset2' />
            </div>
            <img src={ProjectsTitle} alt='projects title' className='project--title'/>
            <div className='project--container'>
                <ProjComponent />
                <ProjComponent />
                <ProjComponent />
                <ProjComponent />
                <ProjComponent />
            </div>
        </div>
    )
}

export default Projects;
