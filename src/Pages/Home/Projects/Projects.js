import React from 'react';
import './Projects.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import project1 from '../../../assets/projects/project1.png'
import project2 from '../../../assets/projects/project2.png'
import project3 from '../../../assets/projects/project3.png'
import project4 from '../../../assets/projects/project4.png'
import project5 from '../../../assets/projects/project5.png'
import project6 from '../../../assets/projects/project6.png'
import project7 from '../../../assets/projects/project7.png'
import project8 from '../../../assets/projects/project8.png'
import Project from '../Project/Project';

const Projects = () => {
    const projects = [
        {
            id: 1,
            img: project1,
            title: 'Creative Agency',
            description: 'A creative agency is a service selling website where clients can order services'
        },
        {
            id: 2,
            img: project2,
            title: 'Doctors Portal',
            description: "Set an appointment as a patient by going to the doctor's chamber. View appointment list again as a doctor. Prescription writing related projects."
        },
        {
            id: 3,
            img: project3,
            title: 'Red Onion (Restaurant website)',
            description: "A restaurant website. where the menu will be. Food will be priced. Can select food in the cart. Can place order."
        },
        {
            id: 4,
            img: project4,
            title: 'Travel Guru',
            description: "A traveling website. Where you can book according to the destination."
        },
        {
            id: 5,
            img: project5,
            title: 'Power-x-gym (gym website)',
            description: "A gym will have a website. What facilities are there? Website development with membership, payment gateway and gym."
        },
        {
            id: 6,
            img: project6,
            title: ' Air CNC (Air bnb clone) ',
            description: "Create a simple version of a world famous website like Air bnb. Where different hosting options will show on Google Maps. There will be a booking system."
        },
        {
            id: 7,
            img: project7,
            title: 'Urban Riders',
            description: "Much like a simple version of Uber. Where there are different ride options. And from there you can select the option. The direction will show! etc."
        },
        {
            id: 8,
            img: project8,
            title: 'Volunteer Network',
            description: "A simple website to manage volunteers. Where someone wants to be a volunteer can select from various volunteer jobs. You can book."
        },
    ]

    return (
        <section id='project' className='projects-section'>
            <div className='container'>
                <h2 className='project-title'>Here are some of <span>our works</span></h2>
                <div className='projects'>
                    <Swiper className="mySwiper"
                        breakpoints={{
                            576: {
                                width: 576,
                                slidesPerView: 1,
                            },
                            768: {
                                width: 768,
                                slidesPerView: 2,
                            },
                            1200: {
                                width: 1200,
                                slidesPerView: 3,

                            },
                        }}

                        modules={[Pagination, A11y, Autoplay]}
                        spaceBetween={24}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{ clickable: true }}
                    >
                        <div>
                            {
                                projects.map(project => <SwiperSlide key={project.id}>
                                    <Project project={project}></Project>
                                </SwiperSlide>)
                            }
                        </div>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Projects;