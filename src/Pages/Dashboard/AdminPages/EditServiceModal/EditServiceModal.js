import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const EditServiceModal = ({ service, showModal, handleClose }) => {
    const { image, name, price, description } = service;

    return (
        <Modal
            show={showModal}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            size='lg'
        >
            <Modal.Header className='align-items-start' closeButton></Modal.Header>
            <Modal.Body>
                <div className='row'>

                    <div className='d-grid col-12 col-lg-6'>
                        <div className='text-center'>
                            <img src={image} alt="" style={{ width: '100px' }} />
                            <h2 className='fs-4 mt-2 mb-1'>{name}</h2>
                            <p className='fs-5 fw-medium '>Price: <span style={{ color: '#7AB259' }}>${price}</span></p>
                            <p>{description}</p>
                        </div>
                    </div>

                    <div className='d-grid col-12 col-lg-6'>
                        <Form>

                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Control
                                    value={image}
                                    name='name'
                                    type="text"
                                    placeholder="Image URL"
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Control
                                    value={name}
                                    name='name'
                                    type="text"
                                    placeholder="Service name"
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPrice">
                                <Form.Control
                                    value={price}
                                    name='price'
                                    type="number"
                                    placeholder="Price"
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicDescription">
                                <Form.Control
                                    value={description}
                                    as="textarea"
                                    rows='5'
                                    name='description'
                                    type="text"
                                    placeholder="Type here service description..."
                                    required
                                />
                            </Form.Group>

                            <Button
                                className='submit-button py-2 text-uppercase fw-medium '
                                type="submit"
                            >
                                Update
                            </Button>
                        </Form>
                    </div>

                </div>
            </Modal.Body>
        </Modal>
    );
};

export default EditServiceModal;