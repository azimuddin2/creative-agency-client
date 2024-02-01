import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logos/logo.png';
import './Header.css';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import { CgLogIn } from "react-icons/cg";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                toast.error(error.message);
            })
    };

    return (
        <Navbar className='navbar' collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img className='logo' src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto navbar-menu">
                        <Nav.Link as={Link} to="/" >Home</Nav.Link>
                        <Nav.Link href="/#project">Our Portfolio</Nav.Link>
                        <Nav.Link href="/#services">Our Services</Nav.Link>
                        <Nav.Link href="/#contact">Contact Us</Nav.Link>
                        <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                        {
                            user?.uid ?
                                (
                                    <button onClick={handleLogout} className='login border-0'>
                                        <span>Logout</span>
                                        <CgLogIn className='icon fs-5' />
                                    </button>
                                )
                                :
                                (
                                    <Link to="/login" className='login'>
                                        <span>Login</span>
                                        <CgLogIn className='icon fs-5' />
                                    </Link>
                                )
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;