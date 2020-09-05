import React from 'react';
import './Testimonial.css';

const Testimonial = ({testimonial}) => {
    return (
        <React.Fragment>
            <div className="testimonial__imageContainer relative z-10 overflow-hidden p-2 bg-white rounded-full">
                <img className="testimonial__image mx-auto" src={require(`../../images/testimonial/${testimonial.image}`)} alt={testimonial.name} />
            </div>
            <div className="testimonial text-white p-5 mr-2">
                <div className="testimonial__detailsContainer px-2 py-5 font-semibold text-center">
                    <p className="testimonial__name">{testimonial.name}</p>
                    <span className="quote rounded-full inline-block mx-auto my-5">"</span>
                    <p className="testimonial__details">{testimonial.details}</p>
                </div> 
            </div>
        </React.Fragment>
    )
}

export default Testimonial
