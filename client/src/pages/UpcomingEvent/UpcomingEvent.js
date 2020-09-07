import React, {useState, useEffect, useRef} from 'react';
import { useLocation } from 'react-router-dom';
import './UpcomingEvent.css';
import queryString from 'query-string';
import Axios from 'axios';
import Container from '../../components/Container/Container';
import Nav from '../../components/Nav/Nav';
import {dateTimeFormat} from '../../functions/functions';
import Button from '../../components/Button/Button';

const UpcomingEvent = () => {

    const location = useLocation();
    const detailsRef = useRef(null);
    const [upcomingEvent, setUpcomingEvent] = useState(null);

    useEffect(() => {
        const {id} = queryString.parse(location.search);

        Axios({
            method: 'GET',
            url: `http://localhost:9000/event?id=${id}`,
            withCredentials: true
        })
            .then(response => {
                setUpcomingEvent(response.data)
            })
    }, [location.search]);

    useEffect(() => {
        if(upcomingEvent) {
            let fullDetails = detailsRef.current.textContent;
            detailsRef.current.innerHTML = fullDetails;
        }
        
    }, [upcomingEvent]);

    return (
        <div className="newPage text-white pb-5">
            <Container first={true}>
                <Nav />
                {
                    upcomingEvent && (
                        <>
                            <div className="relative">
                                <img className="upcomingEvent__image" src={require(`../../images/upcoming_event/${upcomingEvent.image}`)} alt={upcomingEvent.title} />
                                <div className="upcomingEvent__titleContainer absolute px-5 md:px-10 py-2 md:py-5">
                                    <h3 className="upcomingEvent__title font-bold text-lg sm:text-xl md:text-2xl ">{upcomingEvent.title}</h3>
                                    <p className="mt-2 text-xs sm:text-sm md:text-base">
                                        {
                                            dateTimeFormat(upcomingEvent.date)
                                        }
                                    </p>
                                </div>
                            </div>
                            <div className="md:w-4/5 mx-auto">
                                <div className="my-8" ref={detailsRef}>{upcomingEvent.full_details}</div>
                                <a rel="noopener noreferrer" target="_blank" href={upcomingEvent.link}>
                                    <Button large={true} green={true} />
                                </a>
                            </div>
                        </>
                    )
                }
            </Container>
        </div>
    )
}

export default UpcomingEvent
