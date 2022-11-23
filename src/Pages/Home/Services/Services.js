import React from 'react';
import Service from '../Service/Service';
import './Services.css';
import webDesign from '../../../assets/icons/service1.png';
import graphicDesign from '../../../assets/icons/service2.png';
import webDevelopment from '../../../assets/icons/service3.png';

const Services = () => {

    const services = [
        {
            id: 1,
            img: webDesign,
            name: 'Web & Mobile design',
            description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.',
            shadow: 'shadow-none'
        },
        {
            id: 2,
            img: graphicDesign,
            name: 'Graphic design',
            description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.',
            shadow: 'shadow'
        },
        {
            id: 1,
            img: webDevelopment,
            name: 'Web development',
            description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
            shadow: 'shadow-none'
        },
    ]

    return (
        <div id='services' className='container'>
            <h2 className='service-title'>Provide awesome <span>services</span></h2>
            <div className='services'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;