import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logos/logo.png';
import './Header.css';

const Header = () => {
    return (
        <>
            <Navbar className='navbar' collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img className='logo' src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto navbar-menu">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link href="#pricing">Our Portfolio</Nav.Link>
                            <Nav.Link href="#pricing">Our Team</Nav.Link>
                            <Nav.Link href="#pricing">Contact Us</Nav.Link>
                            <Nav.Link as={Link} className='login' to="/login">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;