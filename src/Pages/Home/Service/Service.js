import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { image, name, description } = service;

    return (
        <div className='service shadow-sm mb-5 h-100 w-100'>
            <div className='service-image'>
                <img src={image} alt={name} />
            </div>
            <div className='service-info'>
                <h4>{name}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Service;