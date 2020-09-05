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
            withCredentials: true,
            headers: {'Content-Type': 'application/json' }
        })
            .then(response => {
                setUpcomingEvent(response.data[0])
            })
    }, []);

    useEffect(() => {
        if(upcomingEvent) {
            let fullDetails = detailsRef.current.textContent;
            detailsRef.current.innerHTML = fullDetails;
        }
        
    }, [upcomingEvent]);

    return (
        <div className="upcomingEvent text-white pb-5">
            <Container first={true}>
                <Nav />
                {
                    upcomingEvent && (
                        <>
                            <img className="upcomingEvent__image mt-5" src={require(`../../images/upcoming_event/${upcomingEvent.image}`)} alt={upcomingEvent.title} />
                            <div className="">
                                <h1 className="upcomingEvent__title font-bold text-4xl mt-5">{upcomingEvent.title}</h1>
                                <p className="mt-2 text-base">
                                    {
                                        dateTimeFormat(upcomingEvent.date)
                                    }
                                </p>
                                <div className="my-8" ref={detailsRef}>{upcomingEvent.full_details}</div>
                                <Button large={true} register={true} />
                            </div>
                        </>
                    )
                }
            </Container>
        </div>
    )
}

export default UpcomingEvent
