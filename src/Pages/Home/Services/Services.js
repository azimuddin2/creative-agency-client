import React from 'react';
import './Services.css';
import { useQuery } from '@tanstack/react-query';
import ErrorMessage from '../../Shared/ErrorMessage/ErrorMessage';
import Loading from '../../Shared/Loading/Loading';
import { A11y, Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import 'swiper/css/pagination';
import Service from '../Service/Service';

const Services = () => {

    const { data: services = [], isLoading, error } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/services');
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    if (error) {
        return <ErrorMessage message={error.message}></ErrorMessage>
    }

    return (
        <div id='services' className='container'>
            <h2 className='service-title'>Provide Awesome <span>Services</span></h2>
            <div className='services'>
                <Swiper
                    style={{
                        "--swiper-pagination-color": "#7AB259",
                        "--swiper-pagination-bullet-inactive-color": "#999999",
                        "--swiper-pagination-bullet-inactive-opacity": "1",
                        "--swiper-pagination-bullet-size": "14px",
                        "--swiper-pagination-bullet-horizontal-gap": "3px",
                    }}
                    className="mySwiper"
                    breakpoints={{
                        576: {
                            width: 576,
                            slidesPerView: 1,
                        },
                        768: {
                            width: 768,
                            slidesPerView: 2,
                        },
                        1280: {
                            width: 1280,
                            slidesPerView: 3,
                        },
                    }}
                    spaceBetween={14}
                    modules={[A11y, Pagination, Navigation, Autoplay]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                >
                    {
                        services?.map(service => <SwiperSlide key={service._id} className='p-1'>
                            <Service service={service}></Service>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Services;