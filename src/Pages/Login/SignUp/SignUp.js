import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import signup from '../../../assets/images/signup.gif';
import './SignUp.css';

const SignUp = () => {
    const navigate = useNavigate();

    const handleFormSubmit = event => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

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
                            <Form.Control name='name' type="text" placeholder="Name" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control name='email' type="email" placeholder="Email" required />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicPassword">
                            <Form.Control name='password' type="password" placeholder="Password" required />
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