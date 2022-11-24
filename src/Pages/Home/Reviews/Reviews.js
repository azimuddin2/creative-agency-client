import React from 'react';
import './Reviews.css';
import customer1 from '../../../assets/images/customer-1.png';
import customer2 from '../../../assets/images/customer-2.png';
import customer3 from '../../../assets/images/customer-3.png';
import Review from '../Review/Review';

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
        }
    ]

    return (
        <section className='container'>
            <h2 className='client-title'>Clients <span>Feedback</span></h2>
            <div className='reviews'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Reviews;