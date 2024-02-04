import React from 'react';
import './Review.css';
import comma from '../../../assets/images/comma.png';

const Review = ({ review }) => {
    const { img, name, position, description } = review;

    return (
        <div className='review mb-5 w-100'>
            <div className='review-info'>
                <div className='review-info-part'>
                    <div className='review-image'>
                        <img src={img} alt={name} />
                    </div>
                    <div className='client-title'>
                        <h5>{name}</h5>
                        <h6>{position}</h6>
                    </div>
                </div>
                <div className='comma'>
                    <img src={comma} alt="" />
                </div>
            </div>
            <div className='review-description'>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Review;