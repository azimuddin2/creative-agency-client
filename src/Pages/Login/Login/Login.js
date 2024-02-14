import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import login from '../../../assets/images/login.gif';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import logo from '../../../assets/logos/logo.png';
import useToken from '../../../hooks/useToken';
import swal from 'sweetalert';
import useTitle from '../../../hooks/useTitle';

const Login = () => {
    useTitle('Login');
    const { signIn } = useContext(AuthContext);
    const [adminAccess, setAdminAccess] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [accepted, setAccepted] = useState(false);

    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleFormSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(user.email);
                saveUserDataBase(user.displayName, user.email);
                form.reset();
            })
            .catch(error => {
                toast.error(error.message);
            })
    };

    const saveUserDataBase = (name, email) => {
        const userInfo = {
            name,
            email
        };
        fetch('https://creative-agency-server-ivory.vercel.app/users', {
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

    if (token) {
        navigate(from, { replace: true });
    }

    if (adminAccess === true) {
        swal({
            title: "Admin Access🔐",
            text: "📧Email: adminaccess@gmail.com & 🔑Password: 123456@",
            icon: "info",
            button: "Close",
        });
        setAdminAccess(false);
    }

    return (
        <section className='container'>
            <Link to={'/'} className='d-flex justify-content-center align-items-center mt-5'>
                <img src={logo} alt="logo" style={{ width: '180px' }} />
            </Link>
            <div className='login-section'>
                <div className='login-image'>
                    <img src={login} alt="login" />
                </div>
                <div className='login-form'>
                    <h2 className='form-title'>Login</h2>
                    <Form onSubmit={handleFormSubmit}>
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
                                type={showPassword ? "text" : "password"}
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
                            <div className='d-flex justify-content-between align-items-center'>
                                <label className="form-check-label fw-semibold" htmlFor="flexCheckDefault">
                                    Remember Me
                                </label>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    <Link className='forgot-password'>Forgot Password</Link>
                                </label>
                            </div>
                        </div>
                        <Button disabled={!accepted} className='submit-button py-2' type="submit">LOGIN</Button>
                    </Form>
                    <p className='account'>Don’t have an account? <Link to='/signup'><span>Create an account</span></Link> </p>
                </div>
            </div>
        </section>
    );
};

export default Login;