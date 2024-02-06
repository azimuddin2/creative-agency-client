import React from 'react';

const ServiceCol = ({ service }) => {
    const { image, name, price, description } = service;

    return (
        <div className="service shadow-sm mb-5 h-100 w-100">
            <img src={image} className="service-image" alt={name} />
            <div className="service-info">
                <h5>{name}</h5>
                <p>{description}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
};

export default ServiceCol;