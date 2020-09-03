import React from 'react';
import './Review.css';

const Review = ({review}) => {
    return (
        <div className="review text-center text-white">
            <h4 className="review__content text-2xl md:text-3xl lg:text-4xl font-semibold">{review.details}</h4>
            <img src={require(`../../images/leader_review/${review.image}`)} className="review__image block w-100" alt={review.name} />
              
            <em>{review.name}, {review.title}</em>
        </div>
    )
}

export default Review
