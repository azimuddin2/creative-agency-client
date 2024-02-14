import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logo from '../../../assets/logos/logo.png';
import facebook from '../../../assets/icons/facebook.png';
import linkedin from '../../../assets/icons/linkedin.png';
import twitter from '../../../assets/icons/twitter.png';
import instagram from '../../../assets/icons/instagram.png';
import youtube from '../../../assets/icons/youtube.png';
import ScrollToTop from 'react-scroll-to-top';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='footer-main-part'>
                    <div className='footer-first-part'>
                        <img className='logo' src={logo} alt="" />
                        <div className='footer-first-part-info'>
                            <p>
                                <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
                                <span>Level-4, 34, Awal Centre, Banani, Dhaka</span>
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                                <span>mohammadazimuddin274@gmail.com</span>
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                                <span>Helpline: 01883061967</span>
                            </p>
                        </div>
                    </div>
                    <div className='footer-second-part'>
                        <h5 className='company'>Company</h5>
                        <ul>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Project</a></li>
                            <li><a href="/">Our Team</a></li>
                            <li><a href="/">Terms Conditions</a></li>
                            <li><a href="/">Web Development Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className='footer-third-part'>
                        <h5>About us</h5>
                        <p>Hello there. First, I will introduce myself. My name is Azim Uddin and I am a Full Stack web developer. I have 4+ years of experience in web programming.</p>
                        <div className='social-icon'>
                            <img src={facebook} alt="facebook" />
                            <img src={linkedin} alt="linkedin" />
                            <img src={twitter} alt="twitter" />
                            <img src={instagram} alt="instagram" />
                            <img src={youtube} alt="youtube" />
                        </div>
                    </div>
                </div>
                <p className='copyright'><small>Copyright © 2024 Creative Agency</small></p>
                <ScrollToTop
                    className='d-flex align-items-center justify-content-center'
                    smooth
                    color='#fff'
                    width='16'
                    height='16'
                    top='400'
                    style={{ backgroundColor: '#7AB259', padding: '10px', boxShadow: 'none' }}
                ></ScrollToTop>
            </div>
        </footer>
    );
};

export default Footer;