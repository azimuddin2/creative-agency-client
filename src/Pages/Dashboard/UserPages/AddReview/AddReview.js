import React from 'react';
import { Button, Form } from 'react-bootstrap';
import reviewGif from '../../../../assets/images/review.gif';

const AddReview = () => {

    const handleSubmit = () => {

    };

    return (
        <div>

            <div className='login-section m-0'>
                
                <div className='login-image'>
                    <img src={reviewGif} alt="login" className='mx-auto'/>
                </div>

                <div className='login-form'>
                    <h2 style={{fontFamily: 'Roboto Condensed", sans-serif', fontWeight: '500'}} className='form-title mb-3 text-center'>Add Review</h2>
                    <Form onSubmit={handleSubmit} className='bg-light p-4 pb-lg-4 p-lg-5 rounded-2'>

                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Control
                                name='name'
                                type="text"
                                placeholder="Your name / Company name"
                                required
                            />
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control
                                name='name'
                                type="text"
                                placeholder="Position"
                                required
                            />
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="formBasicMessage">
                            <Form.Control
                                as="textarea"
                                rows='5'
                                name='description'
                                type="text"
                                placeholder="Type here review message..."
                                required
                            />
                        </Form.Group>







                        <Button className='submit-button py-2' type="submit">Submit</Button>
                    </Form>
                </div>

            </div>


        </div >
    );
};

export default AddReview;