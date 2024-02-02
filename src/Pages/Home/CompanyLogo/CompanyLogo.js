import React from 'react';
import './CompanyLogo.css';
import slack from '../../../assets/logos/slack.png';
import google from '../../../assets/logos/google.png';
import uber from '../../../assets/logos/uber.png';
import netflix from '../../../assets/logos/netflix.png';
import airbnb from '../../../assets/logos/airbnb.png';

const CompanyLogo = () => {
    return (
        <section className='container'>
            <div className='company-logo'>
                <img src={slack} alt="slack company logo" />
                <img src={google} alt="google company logo" />
                <img className='uber-logo' src={uber} alt="uber company logo" />
                <img src={netflix} alt="netflix company logo" />
                <img src={airbnb} alt="airbnb company logo" />
            </div>
        </section>
    );
};

export default CompanyLogo;