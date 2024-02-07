import React from 'react';
import { MdOutlineShoppingCart } from "react-icons/md";

const ServiceCol = ({ service }) => {
    const { image, name, price, description } = service;

    return (
        <div className='service shadow-sm'>
            <div className='service-image'>
                <img src={image} alt={name} />
            </div>
            <div className='service-info'>
                <h4>{name}</h4>
                <p className=' fs-5 fw-medium '>Price: <span style={{ color: '#7AB259' }}>${price}</span></p>
                <p>{description}</p>
                <button
                    style={{ backgroundColor: '#7AB259' }}
                    className='button mx-auto '
                >
                    <span className='fw-normal'>Order Now</span>
                    <MdOutlineShoppingCart className='fs-5 ms-1' />
                </button>
            </div>
        </div>
    );
};

export default ServiceCol;