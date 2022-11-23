import React from 'react';
import Banner from '../Banner/Banner';
import CompanyLogo from '../CompanyLogo/CompanyLogo';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CompanyLogo></CompanyLogo>
            <Services></Services>
            <Projects></Projects>
        </div>
    );
};

export default Home;