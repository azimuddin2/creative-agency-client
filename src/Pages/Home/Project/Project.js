import React from 'react';
import './Project.css';

const Project = ({project}) => {
    const {img, title, description} = project;

    return (
        <div className='project'>
            <div className='project-image'>
                <img src={img} alt={title} />
            </div>
            <div className='project-info'>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Project;