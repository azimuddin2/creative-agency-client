import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import signup from '../../../assets/images/signup.gif';
import './SignUp.css';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);

    const handleFormSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                toast.success(`Create user successfully ${user?.email}`);
                console.log(user)
                form.reset();
            })
            .catch(error => {
                toast.error(error.message);
            })
    };

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
                    <p className='account'>Already have an account? <Link to='/login'><span>Login</span></Link> </p>
                </div>
            </div>
        </section>
    );
};

export default SignUp;