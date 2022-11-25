import { faLocationDot, faEnvelope, faPhone, faLinkdin } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logo from '../../../assets/logos/logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer id="/" className='container footer'>
            <div className='footer-main-part'>
                <div className='footer-first-part'>
                    <img className='logo' src={logo} alt="" />
                    <div className='footer-first-part-info'>
                        <p>
                            <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
                            <span> Level-4, 34, Awal Centre, Banani, Dhaka</span>
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                            <span> Official: mohammadazimuddin274@gmail.com</span>
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                            <span> Helpline : 01883061967</span>
                        </p>
                    </div>
                </div>
                <div className='footer-second-part'>
                    <h5 className='company'>Company</h5>
                    <ul>
                        <li><a href="">About</a></li>
                        <li><a href="">Project</a></li>
                        <li><a href="">Our Team</a></li>
                        <li><a href="">Terms Conditions</a></li>
                        <li><a href="">Web Development Privacy Policy</a></li>
                    </ul>
                </div>
                <div className='footer-third-part'>
                    <h5>About us</h5>
                    <p>Hello there. First, I will introduce myself. My name is Azim Uddin and I am a Full Stack web developer. I have 2+ years of experience in web programming.</p>
                    {/* <FontAwesomeIcon icon={}></FontAwesomeIcon> */}
                </div>
            </div>
            <p className='copyright'><small>Copyright © 2023 Creative Agency</small></p>
        </footer>
    );
};

export default Footer;