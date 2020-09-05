import React from 'react';
import './Review.css';

const Review = ({review}) => {
    return (
        <div className="review text-white text-center md:text-left flex md:flex-row flex-col-reverse items-center p-5 md:p-0 justify-center rounded-lg">
            <div className="review__imageContainer mt-5 md:mr-10 block p-2 bg-white">
                <img src={require(`../../images/leader_review/${review.image}`)} className="review__image" alt={review.name} />
            </div>
            <div className="md:w-2/3">
                <h4 className="review__content text-2xl md:text-3xl lg:text-2xl font-semibold mb-5">"{review.details}"</h4>
                
                <em>-{review.name}, {review.title}</em>
            </div>
        </div>
    )
}

export default Review
