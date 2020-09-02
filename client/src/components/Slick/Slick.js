import React, {useState, useEffect, useRef} from 'react';
import './Slick.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Slick = ({lists, imageUrl}) => {

    const detailsRefs = useRef([]);
    // const [height, setHeight] = useState(0);
    // const [screenWidth, setScreenWidth] = useState(0);

    // const updateScreenWidth = () => {
    //     setScreenWidth(window.innerWidth);
    // }

    // useEffect(() => {
    //     const refs = detailsRefs.current;
    //     let tempHeight = 0;
    //     refs.forEach((ref, index) => {
    //         console.log(ref, ref.offsetHeight, ref.clientHeight)
    //         if(ref.clientHeight > tempHeight) tempHeight= ref.clientHeight;
    //     })
    //     setHeight(tempHeight)
    // }, [screenWidth]);

    // useEffect(() => {
    //     window.addEventListener('resize', updateScreenWidth);
    // }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: lists.length >= 4 ? 4 : lists.length,
        slidesToScroll: lists.length >= 4 ? 4 : lists.length,
        swipeToSlide: true,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: lists.length >= 3 ? 3 : lists.length,
                slidesToScroll: lists.length >= 3 ? 3 : lists.length,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: lists.length >= 2 ? 2 : lists.length,
                slidesToScroll: lists.length >= 2 ? 2 : lists.length,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: lists.length >= 1 ? 1 : lists.length,
                slidesToScroll: lists.length >= 1 ? 1 : lists.length
              }
            }
        ]
    };

    return (
        <Slider {...settings}>
            {
                lists.map((list, index) => (
                    <div key={list.id} className="lists__list">
                        <div className="lists__header relative overflow-hidden">
                            <img className="lists__image w-full" src={require(`../../images/${imageUrl}/${list.image}`)} alt={list.name} />
                            <div className="lists__media flex justify-around items-center p-8 absolute z-10 w-full">
                                {
                                    list.facebook && (
                                        <a rel="noopener noreferrer" target="_blank" href={list.facebook}><FontAwesomeIcon icon={faFacebookF} /></a>
                                    )
                                }
                                {
                                    list.twitter && (
                                        <a rel="noopener noreferrer" target="_blank" href={list.twitter}><FontAwesomeIcon icon={faTwitter} /></a>
                                    )
                                }
                                {
                                    list.instagram && (
                                        <a rel="noopener noreferrer" target="_blank" href={list.instagram}><FontAwesomeIcon icon={faLinkedinIn} /></a>
                                    )
                                }
                                {
                                    list.linkedin && (
                                        <a rel="noopener noreferrer" target="_blank" href={list.linkedin}><FontAwesomeIcon icon={faInstagram} /></a>
                                    )
                                }
                            </div>
                        </div>

                        <div ref={el => detailsRefs.current[index] = el} className="lists__details flex flex-col justify-center text-center">
                            <h5 className="lists__name text-xl font-semibold">{list.name}</h5>
                            <p className="lists__title">{list.title}</p>
                        </div>
                    </div>
                ))
            }
        </Slider>
    )
}

export default Slick
