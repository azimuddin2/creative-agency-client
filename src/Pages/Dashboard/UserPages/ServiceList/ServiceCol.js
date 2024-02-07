import React, { useState } from 'react';
import { MdOutlineShoppingCart } from "react-icons/md";
import OrderModal from '../OrderModal/OrderModal';

const ServiceCol = ({ service }) => {
    const { image, name, price, description } = service;

    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    return (
        <>
            <div className='service shadow-sm'>
                <div className='service-image'>
                    <img src={image} alt={name} />
                </div>
                <div className='service-info'>
                    <h4>{name}</h4>
                    <p className='fs-5 fw-medium '>Price: <span style={{ color: '#7AB259' }}>${price}</span></p>
                    <p>{description}</p>
                    <button
                        onClick={handleShow}
                        style={{ backgroundColor: '#7AB259' }}
                        className='button mx-auto '
                    >
                        <span className='fw-normal'>Order Now</span>
                        <MdOutlineShoppingCart className='fs-5 ms-1' />
                    </button>
                </div>
            </div>
            <OrderModal
                service={service}
                showModal={showModal}
                handleClose={handleClose}
            ></OrderModal>
        </>
    );
};

export default ServiceCol;