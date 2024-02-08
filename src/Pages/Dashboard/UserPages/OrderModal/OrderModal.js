import React, { useContext } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const OrderModal = ({ service, showModal, handleClose }) => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const { image, name, price } = service;

    const handleSubmit = (event) => {
        event.preventDefault();
        const phone = event.target.phone.value;

        const orderInfo = {
            name: user.displayName,
            email: user.email,
            phone,
            serviceName: name,
            image,
            price,
        };
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderInfo)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    handleClose(false);
                    toast.success('Order Complete Please Payment', {
                        duration: 5000,
                        position: 'top-center'
                    });
                    navigate('/dashboard/my-orders');
                }
            })
    };

    return (
        <Modal
            show={showModal}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header className='align-items-start' closeButton>
                <div className='d-block text-center w-100'>
                    <img src={image} alt={name} style={{ width: '80px' }} />
                    <h2 className='fs-4 mt-2 mb-1'>{name}</h2>
                    <p className='fs-5 fw-medium '>Price: <span style={{ color: '#7AB259' }}>${price}</span></p>
                </div>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control
                            name='name'
                            type="text"
                            value={name}
                            readOnly
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control
                            name='name'
                            type="text"
                            value={user?.displayName}
                            disabled
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                            name='email'
                            type="email"
                            value={user?.email}
                            disabled
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                            name='phone'
                            type="text"
                            placeholder='Your Phone Number'
                            required
                        />
                    </Form.Group>
                    <Button className='submit-button py-2 text-uppercase' type="submit">Submit</Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default OrderModal;