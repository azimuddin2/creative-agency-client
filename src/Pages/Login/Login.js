import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import login from '../../assets/images/login.gif';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const handleFormSubmit = event => {
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        console.log(email, password)
    }

    const navigateCreateAccount = () => {
        navigate('/signup')
    }

    return (
        <section className='container'>
            <div className='login-section'>
                <div className='login-image'>
                    <img src={login} alt="login" />
                </div>
                <div className='login-form'>
                    <h2 className='form-title'>Login</h2>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control ref={emailRef} type="email" placeholder="Email" required />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicPassword">
                            <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>

                        <Button className='submit-button py-2' type="submit">LOGIN</Button>
                    </Form>
                    <p className='account'>Don’t have an account? <span onClick={navigateCreateAccount}>Create an account</span></p>
                </div>
            </div>
        </section>
    );
};

export default Login;