import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Review from '../Review/Review';

const Slick3 = ({lists}) => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        swipeToSlide: true,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
            {
                lists.map(list => (
                    <Review key={list.id} review={list} />
                ))
            }
        </Slider>
    )
}

export default Slick3
