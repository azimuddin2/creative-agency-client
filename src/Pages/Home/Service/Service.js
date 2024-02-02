import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { img, name, description } = service;
    return (
        <div className={`service shadow-sm`}>
            <div className='service-image'>
                <img src={img} alt="" />
            </div>
            <div className='service-info'>
                <h4>{name}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Service;