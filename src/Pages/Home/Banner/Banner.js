import React from 'react';
import frame from '../../../assets/logos/Frame.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner'>
            <div className='container banner-section'>
                <div className='banner-info'>
                    <h1>Let’s Grow Your Brand To The Next Level</h1>
                    <p>A creative agency is a term for an agency that offers a variety of services that fall under the umbrella of marketing and advertising.</p>
                    <button className='button'>
                        <span>Hire us</span>
                        <FontAwesomeIcon className='icon' icon={faArrowRight}></FontAwesomeIcon>
                    </button>
                </div>
                <div className='banner-image'>
                    <img src={frame} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;