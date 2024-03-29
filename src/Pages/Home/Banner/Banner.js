import React from 'react';
import frameImg from '../../../assets/logos/Frame.png';
import { IoArrowForwardSharp } from "react-icons/io5";
import './Banner.css';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <section className='banner-section'>
            <div className='container banner-container'>
                <div className='banner-image'>
                    <img src={frameImg} alt="frame" />
                </div>
                <div className='banner-info'>
                    <h1>Let’s Grow Your Brand To The Next Level</h1>
                    <p>A creative agency is a term for an agency that offers a variety of services that fall under the umbrella of marketing and advertising.</p>
                    <Link to={'/dashboard/service-list'} className='text-decoration-none'>
                        <button className='button'>
                            <span>Hire Us</span>
                            <IoArrowForwardSharp className='icon' />
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Banner;