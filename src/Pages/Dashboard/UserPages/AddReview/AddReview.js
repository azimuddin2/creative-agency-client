import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { CiEdit } from "react-icons/ci";
import reviewGif from '../../../../assets/images/review.gif';
import './AddReview.css'
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import useTitle from '../../../../hooks/useTitle';

const AddReview = () => {
    useTitle('Add Review');
    const { user } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const position = form.position.value;
        const description = form.description.value;

        const reviewInfo = {
            name,
            position,
            description,
            image: user.photoURL || null,
        };
        fetch('https://creative-agency-server-ivory.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewInfo)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    form.reset();
                    toast.success('Review submit successfully.', {
                        duration: 5000
                    });
                }
            })
    };

    return (
        <div className='form-section my-5'>
            <div className='form-image'>
                <img src={reviewGif} alt="review gif" className='mx-auto' />
            </div>
            <div className='mt-lg-5 bg-light p-4 pb-lg-4 p-lg-5 rounded-2'>
                <h2 className='dashboard-form-title'>Add Review<CiEdit /></h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control
                            name='name'
                            type="text"
                            placeholder="Your name / Company name"
                            defaultValue={user.displayName}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPosition">
                        <Form.Control
                            name='position'
                            type="text"
                            placeholder="Your Position"
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
    );
};

export default AddReview;