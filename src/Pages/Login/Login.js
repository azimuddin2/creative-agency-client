import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import login from '../../assets/images/login.gif';

const Login = () => {
    const navigate = useNavigate();

    const handleFormSubmit = event => {
        event.preventDefault();

       const email = event.target.email.value;
       const password = event.target.password.value;

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
                            <Form.Control name='email' type="email" placeholder="Email" required />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicPassword">
                            <Form.Control name='password' type="password" placeholder="Password" required />
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