import React from 'react';
import './Review.css';

const Review = ({review}) => {
    const {img, name, position, description} = review;

    return (
        <div className='review'>
            <div className='review-info'>
                <div className='review-image'>
                    <img src={img} alt={name} />
                </div>
                <div className='client-title'>
                    <h5>{name}</h5>
                    <h6>{position}</h6>
                </div>
            </div>
            <div className='review-description'>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Review;