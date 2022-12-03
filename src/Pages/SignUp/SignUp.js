import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import signup from '../../assets/images/signup.gif';
import './SignUp.css';

const SignUp = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const handleFormSubmit = event => {
        event.preventDefault();

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        console.log(name, email, password);
    }

    const navigateLogin = () => {
        navigate('/login')
    }


    return (
        <section className='container'>
            <div className='signUp-section'>
                <div className='signUp-image'>
                    <img src={signup} alt="signUp" />
                </div>
                <div className='signUp-form'>
                    <h2 className='form-title'>Sign Up</h2>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Control ref={nameRef} type="text" placeholder="Name" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control ref={emailRef} type="email" placeholder="Email" required />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicPassword">
                            <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>

                        <Button className='submit-button py-2' type="submit">SIGN UP</Button>
                    </Form>
                    <p className='account'>Already have an account? <span onClick={navigateLogin}>Login</span></p>
                </div>
            </div>
        </section>
    );
};

export default SignUp;