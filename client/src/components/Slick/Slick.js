import React, {useRef} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Person from '../Person/Person';

const Slick = ({lists, imageUrl}) => {

    const detailsRefs = useRef([]);

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: lists?.length >= 4 ? 4 : lists?.length,
        slidesToScroll: lists?.length >= 4 ? 4 : lists?.length,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: lists?.length >= 3 ? 3 : lists?.length,
                slidesToScroll: lists?.length >= 3 ? 3 : lists?.length,
              }
            },
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
                  lists.map((list, index) => (
                      <Person key={list.id} person={list} index={index} imageUrl={imageUrl} detailsRefs={detailsRefs} />
                  ))
              }
          </Slider>
        )}
      </React.Fragment>
    )
}

export default Slick
