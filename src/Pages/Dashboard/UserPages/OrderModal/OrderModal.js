import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const OrderModal = ({ service, showModal, handleClose }) => {
    const { name, price, description } = service;
    return (
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Price: ${price}</p>
                <p>{description}</p>

                {/* Additional details or a form for ordering can go here */}
                {/* For example, you can add an order form */}
                <form>
                    {/* Form fields for ordering the service */}
                    <label htmlFor='quantity'>Quantity:</label>
                    <input type='number' id='quantity' name='quantity' min='1' required />
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={handleClose}>
                    Close
                </Button>
                <Button variant='primary' onClick={handleClose}>
                    Order Now
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default OrderModal;