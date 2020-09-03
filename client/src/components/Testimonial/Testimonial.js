import React from 'react';
import './Testimonial.css';

const Testimonial = ({testimonial}) => {
    return (
        <div className="testimonial text-white p-5 mr-2">
            <div className="testimonial__header flex items-center mb-6 pb-5">
                <img className="testimonial__image" src={require(`../../images/testimonial/${testimonial.image}`)} alt={testimonial.name} />
                <p className="testimonial__name">{testimonial.name}</p>
            </div>
            <p className="testimonial__details p-1 font-semibold flex items-center">
                {testimonial.details}
            </p>
        </div>
    )
}

export default Testimonial
