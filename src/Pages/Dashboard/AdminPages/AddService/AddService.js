import React, { useContext, useState } from 'react';
import addServiceGif from '../../../../assets/images/add-service.gif';
import { Button, Form } from 'react-bootstrap';
import { CiEdit } from 'react-icons/ci';
import { SlCloudUpload } from "react-icons/sl";
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import useTitle from '../../../../hooks/useTitle';

const AddService = () => {
    useTitle('Add Service');
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const imageUploadToken = process.env.REACT_APP_Image_Upload_Token;
    const imageHostingURL = `https://api.imgbb.com/1/upload?key=${imageUploadToken}`;

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('image', selectedFile);

        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const description = form.description.value;

        fetch(imageHostingURL, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageResult => {
                if (imageResult.success) {
                    const imageURL = imageResult.data.display_url;

                    const addNewService = {
                        image: imageURL,
                        name,
                        price: parseInt(price),
                        description
                    };
                    fetch('http://localhost:5000/services', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(addNewService)
                    })
                        .then(res => {
                            if (res.status === 401 || res.status === 403) {
                                logOut();
                                localStorage.removeItem('accessToken');
                                navigate('/login')
                            }
                            return res.json()
                        })
                        .then(result => {
                            if (result.insertedId) {
                                form.reset();
                                swal({
                                    title: "Service added successfully.",
                                    icon: "success",
                                    timer: 5000
                                });
                                navigate('/dashboard/manage-services');
                            }
                        })
                }
            })
    };

    return (
        <div className='form-section my-5'>
            <div className='form-image'>
                <img src={addServiceGif} alt="service gif" className='mx-auto' />
            </div>
            <div className='mt-lg-5 bg-light p-4 pb-lg-4 p-lg-5 rounded-2'>
                <h2 className='dashboard-form-title'>Add Service<CiEdit /></h2>
                <Form onSubmit={handleSubmit}>
                    <div class="input-group mb-3">
                        <input
                            onChange={handleFileChange}
                            name='image'
                            type="file"
                            className="form-control"
                            id="imageUpload"
                            required
                        />
                        <label style={{ backgroundColor: '#7AB259', color: 'white' }} className="input-group-text d-flex align-items-center" htmlFor="imageUpload">
                            <SlCloudUpload className='me-2 fs-5' />
                            <span>Upload image</span>
                        </label>
                    </div>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control
                            name='name'
                            type="text"
                            placeholder="Service Name"
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPrice">
                        <Form.Control
                            name='price'
                            type="number"
                            placeholder="Price"
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDescription">
                        <Form.Control
                            as="textarea"
                            rows='5'
                            name='description'
                            type="text"
                            placeholder="Type here service description..."
                            required
                        />
                    </Form.Group>
                    <Button className='submit-button py-2 text-uppercase fw-medium ' type="submit">Save</Button>
                </Form>
            </div>
        </div>
    );
};

export default AddService;