import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { CiEdit } from 'react-icons/ci';
import swal from 'sweetalert';

const EditServiceModal = ({ service, showModal, handleClose, refetch }) => {
    const { _id, image, name, price, description } = service;

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const image = form.image.value;
        const name = form.name.value;
        const price = form.price.value;
        const description = form.description.value;

        const updateServiceInfo = {
            image,
            name,
            price,
            description
        };
        fetch(`https://creative-agency-server-ivory.vercel.app/services/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(updateServiceInfo)
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    refetch();
                    handleClose(false);
                    swal({
                        title: `Service updated successfully.`,
                        icon: 'success',
                        timer: 5000
                    })
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
            size='lg'
        >
            <Modal.Header className='align-items-start' closeButton>
                <h2 className='dashboard-form-title mb-0 fs-5'>Edit Service<CiEdit /></h2>
            </Modal.Header>
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
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicImage">
                                <Form.Control
                                    defaultValue={image}
                                    name='image'
                                    type="text"
                                    placeholder="Image URL"
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Control
                                    defaultValue={name}
                                    name='name'
                                    type="text"
                                    placeholder="Service Name"
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPrice">
                                <Form.Control
                                    defaultValue={price}
                                    name='price'
                                    type="number"
                                    placeholder="Price"
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicDescription">
                                <Form.Control
                                    defaultValue={description}
                                    as="textarea"
                                    rows='5'
                                    name='description'
                                    type="text"
                                    placeholder="Type here service description..."
                                    required
                                />
                            </Form.Group>

                            <Button
                                className='submit-button py-2 text-uppercase'
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