import React from 'react';
import Banner from '../Banner/Banner';
import CompanyLogo from '../CompanyLogo/CompanyLogo';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CompanyLogo></CompanyLogo>
            <Services></Services>
        </div>
    );
};

export default Home;