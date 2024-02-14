import React from 'react';
import './Reviews.css';
import customer1 from '../../../assets/images/customer-1.png';
import customer2 from '../../../assets/images/customer-2.png';
import customer3 from '../../../assets/images/customer-3.png';
import Review from '../Review/Review';
import { A11y, Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import 'swiper/css/pagination';

const Reviews = () => {
    const reviews = [
        {
            id: 1,
            img: customer1,
            name: "Nash Patrik",
            position: "CEO, Manpol",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat "
        },
        {
            id: 2,
            img: customer2,
            name: "Miriam Barron",
            position: "CEO, Manpol",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat "
        },
        {
            id: 3,
            img: customer3,
            name: "Bria Malone",
            position: "CEO, Manpol",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat "
        },
        {
            id: 4,
            img: customer1,
            name: "Nash Patrik",
            position: "CEO, Manpol",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat "
        },
        {
            id: 5,
            img: customer2,
            name: "Miriam Barron",
            position: "CEO, Manpol",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat "
        },
    ];

    return (
        <section className='container reviews-section'>
            <h2 className='client-title'>Clients <span>Feedback</span></h2>
            <div className='reviews'>
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
                            spaceBetween: 12,
                        },
                        1280: {
                            width: 1280,
                            slidesPerView: 3,
                        },
                    }}
                    modules={[A11y, Pagination, Navigation, Autoplay]}
                    spaceBetween={20}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                >
                    <div>
                        {
                            reviews.map(review => <SwiperSlide key={review.id}>
                                <Review review={review}></Review>
                            </SwiperSlide>)
                        }
                    </div>
                </Swiper>
            </div>
        </section>
    );
};

export default Reviews;