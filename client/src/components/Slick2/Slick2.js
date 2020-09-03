import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonial from '../Testimonial/Testimonial';

const Slick2 = ({lists}) => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: lists?.length >= 3 ? 3 : lists?.length,
        slidesToScroll: lists?.length >= 3 ? 3 : lists?.length,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: lists?.length >= 2 ? 2 : lists?.length,
                slidesToScroll: lists?.length >= 2 ? 2 : lists?.length,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: lists?.length >= 1 ? 1 : lists?.length,
                slidesToScroll: lists?.length >= 1 ? 1 : lists?.length
              }
            }
        ]
    };

    return (
      <React.Fragment>
        {lists && (
          <Slider {...settings}>
              {
                  lists.map(list => (
                      <Testimonial key={list.id} testimonial={list} />
                  ))
              }
          </Slider>
        )}
      </React.Fragment>
    )
}

export default Slick2
