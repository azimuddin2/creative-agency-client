import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';
import login from '../../../assets/images/login.gif';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const Login = () => {
    const { signIn } = useContext(AuthContext);

    const handleFormSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(error => {
                toast.error(error.message);
            })
    };

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
                    <p className='account'>Don’t have an account? <Link to='/signup'><span>Create an account</span></Link> </p>
                </div>
            </div>
        </section>
    );
};

export default Login;