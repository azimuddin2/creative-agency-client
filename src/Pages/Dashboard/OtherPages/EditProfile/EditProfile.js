import React, { useContext, useEffect, useState } from 'react';
import { CiEdit } from 'react-icons/ci';
import profileGif from '../../../../assets/images/profile.gif';
import { SlCloudUpload } from 'react-icons/sl';
import { Button, Form } from 'react-bootstrap';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';

const EditProfile = () => {
    const { user } = useContext(AuthContext);
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className='form-section my-5'>
            <div className='form-image'>
                <img src={profileGif} alt="profile gif" className='mx-auto' />
            </div>
            <div className='mt-lg-3 bg-light p-4 pb-lg-4 p-lg-5 rounded-2'>
                <h2 className='dashboard-form-title'>Add Service<CiEdit /></h2>
                <Form onSubmit={handleSubmit}>

                    {/* <div class="input-group mb-3">
                        <input
                            // onChange={handleFileChange}
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
                    </div> */}


                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control
                            defaultValue={user.displayName}
                            name='name'
                            type="text"
                            placeholder="Your Name"
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                            defaultValue={user.email}
                            name='email'
                            type="email"
                            placeholder="Your Email"
                            disabled
                        />
                    </Form.Group>


                    <Form.Select name='country' aria-label="Default select example" className='mb-3'>
                        <option>Select Your Country</option>
                        {
                            countries.map(country => <option
                                key={country.cca3}
                                value={country.name.common}
                            >{country.name.common}</option>)
                        }
                    </Form.Select>


                    <Form.Group className="mb-3" controlId="formBasicEducation">
                        <Form.Control
                            name='education'
                            type="text"
                            placeholder="Your Education"
                            required
                        />
                    </Form.Group>

                    <Form.Select aria-label="Default select example" className='mb-3'>
                        <option>Job Skills</option>
                        <option value="1">Web & Mobile Design</option>
                        <option value="2">Graphic Design</option>
                        <option value="3">Web Development</option>
                        <option value="4">Content Writer</option>
                        <option value="5">UI/UX Design</option>
                        <option value="6">Responsive Web Design</option>
                        <option value="7">App Development</option>
                        <option value="8">MERN Stack Development</option>
                        <option value="9">Back-end Development</option>
                        <option value="10">Full Stack Development</option>
                        <option value="11">Front-end Development</option>
                    </Form.Select>


                    <Button
                        className='submit-button py-2 text-uppercase fw-medium '
                        type="submit"
                    >
                        Save
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default EditProfile;