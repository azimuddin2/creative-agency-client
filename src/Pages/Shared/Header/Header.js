import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../assets/logos/logo.png';
import './Header.css';

const Header = () => {
    return (
        <>
            <Navbar className='navbar' collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img className='logo' src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">Our Portfolio</Nav.Link>
                            <Nav.Link href="#pricing">Our Team</Nav.Link>
                            <Nav.Link href="#pricing">Contact Us</Nav.Link>
                            <Nav.Link className='login' href="#pricing">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;