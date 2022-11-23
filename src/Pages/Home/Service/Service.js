import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { img, name, description, shadow } = service;
    return (
        <div className={`service ${shadow}`}>
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