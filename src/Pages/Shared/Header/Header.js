import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logos/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import './Header.css';

const Header = () => {
    return (
        <>
            <Navbar className='navbar' collapseOnSelect expand="lg" sticky="top" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img className='logo' src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto navbar-menu">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link href="#pricing">Our Portfolio</Nav.Link>
                            <Nav.Link href="/#services">Our Services</Nav.Link>
                            <Nav.Link href="#pricing">Contact Us</Nav.Link>
                            <Nav.Link as={Link} className='login' to="/login"><span>Login</span> <FontAwesomeIcon className='icon' icon={faRightToBracket}></FontAwesomeIcon> </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;