import React from 'react';
import './projects.css';
import ProjectsTitle from '../../images/titles/projects.svg';
import ProjComponent from '../../components/proj--component/proj--component';

const Projects = () => {
    return (
        <div className='projects--section' id='projectID'>
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
