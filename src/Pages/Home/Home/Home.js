import React from 'react';
import Banner from '../Banner/Banner';
import CompanyLogo from '../CompanyLogo/CompanyLogo';
import Contact from '../ContactUs/Contact';
import Projects from '../Projects/Projects';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import Questions from '../Questions/Questions';
import useTitle from '../../../hooks/useTitle';

const Home = () => {
    useTitle('Home');

    return (
        <div>
            <Banner></Banner>
            <CompanyLogo></CompanyLogo>
            <Services></Services>
            <Projects></Projects>
            <Questions></Questions>
            <Contact></Contact>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;