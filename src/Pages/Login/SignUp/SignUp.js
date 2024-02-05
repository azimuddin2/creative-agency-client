import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import signup from '../../../assets/images/signup.gif';
import './SignUp.css';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import logo from '../../../assets/logos/logo.png';

const SignUp = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [accepted, setAccepted] = useState(false);

    const handleFormSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                handleUpdateUserProfile(name);
                saveUserDataBase(name, email);
                toast.success(`Create user successfully ${user?.email}`);
                console.log(user)
                form.reset();
            })
            .catch(error => {
                toast.error(error.message);
            })
    };

    const handleUpdateUserProfile = (name) => {
        const profile = {
            displayName: name
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => {
                toast.error(error.message);
            })
    };

    const saveUserDataBase = (name, email) => {
        const userInfo = {
            name,
            email
        };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };

    return (
        <section className='container'>
            <Link to={'/'} className='d-flex justify-content-center align-items-center mt-5'>
                <img src={logo} alt="logo" style={{ width: '180px' }} />
            </Link>
            <div className='signUp-section'>
                <div className='signUp-image'>
                    <img src={signup} alt="signUp" />
                </div>
                <div className='signUp-form'>
                    <h2 className='form-title'>Sign Up</h2>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Control
                                name='name'
                                type="text"
                                placeholder="Name"
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control
                                name='email'
                                type="email"
                                placeholder="Email"
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-5" controlId="formBasicPassword">
                            <Form.Control
                                name='password'
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Password"
                                required
                            />
                            <p
                                className='show-password'
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {
                                    showPassword ?
                                        <FaEyeSlash className='fs-6'></FaEyeSlash>
                                        :
                                        <FaEye className='fs-6'></FaEye>
                                }
                            </p>
                        </Form.Group>

                        <div className="form-check mb-3">
                            <input
                                onClick={() => setAccepted(!accepted)}
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                            />
                            <label className="form-check-label fw-semibold" for="flexCheckDefault">
                                I agree to the <Link className='link'>terms and conditions</Link>
                            </label>
                        </div>

                        <Button disabled={!accepted} className='submit-button py-2' type="submit">SIGN UP</Button>
                    </Form>
                    <p className='account'>Already have an account? <Link to='/login'><span>Login</span></Link> </p>
                </div>
            </div>
        </section>
    );
};

export default SignUp;