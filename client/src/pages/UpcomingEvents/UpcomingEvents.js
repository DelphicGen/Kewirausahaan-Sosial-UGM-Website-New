import React, {useState, useEffect, useRef} from 'react';
import './UpcomingEvents.css';
import Container from '../../components/Container/Container';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import leftArrow from '../../images/upcoming_event/left_arrow.svg';
import rightArrow from '../../images/upcoming_event/right_arrow.svg';
import Button from '../../components/Button/Button';

const UpcomingEvents = ({data}) => {

    const controlRefs = useRef([]);
    const upcomingEventRefs = useRef([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(2);
    const [nextIndex, setNextIndex] = useState(1);
    const [xDown, setXDown] = useState(null);

    // const [upcomingEvents, setUpcomingEvents] = useState([
    //     {
    //         id: 0,
    //         title: '1',
    //         date: '2020-09-03 23:53:00',
    //         details: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //         full_details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quisquam qui fugit pariatur rerum, vel quos a repellat voluptates tempora nihil earum nisi aspernatur iure illo omnis non. Impedit, ipsam.",
    //         image: '1.png'
    //     },
    //     {
    //         id: 1,
    //         title: '2',
    //         date: '2020-09-03 23:53:00',
    //         details: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //         full_details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quisquam qui fugit pariatur rerum, vel quos a repellat voluptates tempora nihil earum nisi aspernatur iure illo omnis non. Impedit, ipsam.",
    //         image: '2.png'
    //     },
    //     {
    //         id: 3,
    //         title: '3',
    //         date: '2020-09-03 23:53:00',
    //         details: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //         full_details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quisquam qui fugit pariatur rerum, vel quos a repellat voluptates tempora nihil earum nisi aspernatur iure illo omnis non. Impedit, ipsam.",
    //         image: '3.png'
    //     }
    // ]);

    const slide = (direction) => {

        let upcomingEvents = upcomingEventRefs.current;
        let activeEvent = document.getElementsByClassName('active-event')[0];
        let next = document.getElementsByClassName('next')[0];
        let prev = document.getElementsByClassName('prev')[0];
        let details = document.querySelectorAll('.upcomingEvents__detail');

        if (upcomingEvents.length === 2) {
            next.classList.add('active-event');
            next.classList.remove('next');
            activeEvent.classList.add('next');
            activeEvent.classList.remove('active-event');

            if(direction === "left") {
                setActiveIndex(prevState => (prevState + 1) % upcomingEvents.length);
            } else {
                setActiveIndex(prevState => (prevState + upcomingEvents.length-1) % upcomingEvents.length)
            }

            details[activeIndex].classList.add('hidden');
            details[nextIndex].classList.remove('hidden');
        } else if (upcomingEvents.length >= 3) {
            if(direction === 'left') {
                next.classList.add('active-event')
                next.classList.remove('next');
                activeEvent.classList.add('prev');
                activeEvent.classList.remove('active-event');
                prev.classList.add('hidden-event');
                prev.classList.remove('prev');

                upcomingEvents[(nextIndex + 1) % upcomingEvents.length].classList.add('next')
                upcomingEvents[(nextIndex + 1) % upcomingEvents.length].classList.remove('hidden-event');

                details[activeIndex].classList.add('hidden');
                details[nextIndex].classList.remove('hidden');

                setActiveIndex(prevState => (prevState + 1) % upcomingEvents.length);
            } else {
                prev.classList.add('active-event');
                prev.classList.remove('prev');
                activeEvent.classList.add('next');
                activeEvent.classList.remove('active-event');
                next.classList.add('hidden-event');
                next.classList.remove('next');

                upcomingEvents[(prevIndex + upcomingEvents.length-1) % upcomingEvents.length].classList.add('prev');
                upcomingEvents[(prevIndex + upcomingEvents.length-1) % upcomingEvents.length].classList.remove('hidden-event');

                details[activeIndex].classList.add('hidden');
                details[prevIndex].classList.remove('hidden');

                setActiveIndex(prevState => (prevState + upcomingEvents.length-1) % upcomingEvents.length)
            }
        }
    }

    const checkSlide = (index) => {
        let upcomingEvent = upcomingEventRefs.current[index];

        upcomingEvent.classList.forEach(el => {
            if(el === 'next') slide('left')
            else if (el === 'prev') slide('right')
        })
    }

    const getTouches = (event) => {
        return event.touches || event.originalEvent.touches;
    }   

    const handleTouchStart = (event) => {
        const firstTouch = getTouches(event)[0];
        setXDown(firstTouch.clientX);                     
    }

    const handleTouchMove = (event) => {
        if (!xDown) {
            return;
        }

        let xUp = event.touches[0].clientX;

        if(xDown > xUp) slide('left')
        else if(xDown < xUp) slide('right')

        setXDown(null);                                       
    };

    useEffect(() => {
        let upcomingEvents = upcomingEventRefs.current;
        setNextIndex((activeIndex + 1) % upcomingEvents.length);
        setPrevIndex((activeIndex + upcomingEvents.length-1) % upcomingEvents.length);
        
    }, [activeIndex]);
    
    return (
        <div className="upcomingEvents relative overflow-hidden">
            <Container>
                <SectionHeader heading="Event Kami Kedepannya" />
                <div className="upcomingEvents__list relative">
                    <div className="upcomingEvents__controls mb-10">
                        <img onClick={() => slide('left')} ref={el => controlRefs.current[0] = el} className="upcomingEvents__leftControl absolute cursor-pointer z-10" src={leftArrow} alt="prev" />
                        <img onClick={() => slide('right')} ref={el => controlRefs.current[1] = el} className="upcomingEvents__rightControl absolute cursor-pointer z-10" src={rightArrow} alt="next"/>
                    </div>
                    {
                        data && (
                        data.map((event, index) => (
                            <img onClick={() => checkSlide(index)} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} ref={el => upcomingEventRefs.current[index] = el} className={`upcomingEvents__image ${index === 0 ? 'active-event' : (index === 1 ? 'next cursor-pointer' : (index === data.length - 1 ? 'prev cursor-pointer' : 'hidden-event'))} inline-block`} id="upcomingEvents__image" src={require(`../../images/upcoming_event/${event.image}`)} alt={event.title} key={event.id} />
                        )))
                    }

                    {
                        data && (
                        data.map((event, index) => (
                            <div key={event.id} className={`upcomingEvents__detail ${index !== 0 && 'hidden'} mt-10 text-center`}>
                                <h4 className="upcomingEvents__title text-xl sm:text-2xl font-semibold">{event.title}</h4>
                                <p className="upcomingEvents__date text-sm mb-5 sm:text-base">{event.date}</p>
                                <p className="upcomingEvents__details text-lg sm:text-xl mb-3">{event.details}</p>
                                <Button />
                            </div>
                        )))
                    }
                </div>


            </Container>
        </div>
    )
}

export default UpcomingEvents
