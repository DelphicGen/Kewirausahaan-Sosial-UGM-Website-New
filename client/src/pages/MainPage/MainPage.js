import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeaderImage from '../HeaderImage/HeaderImage';
import AboutUs from '../AboutUs/AboutUs';
import UpcomingEvents from '../UpcomingEvents/UpcomingEvents';
import Curriculum from '../Curriculum/Curriculum';
import LatestEvent from '../LatestEvent/LatestEvent';
import OurMentor from '../OurMentor/OurMentor';
import OurTeam from '../OurTeam/OurTeam';
import Articles from '../Articles/Articles';
import Testimonials from '../Testimonials/Testimonials';
import MeetTheFounder from '../MeetTheFounder/MeetTheFounder';
import Collaborate from '../Collaborate/Collaborate';

const MainPage = () => {
    const [data, setData]  =useState({});

    useEffect(() => {
        axios({
                method: 'GET',
                url: 'http://localhost:9000/',
                withCredentials: true,
                headers: {'Content-Type': 'application/json' }
        })
            .then(response => {
                setData(response.data)
            })
    }, [])

    return (
        <React.Fragment>
            <HeaderImage />
            <AboutUs />
            <UpcomingEvents data={data.upcomingEvents} />
            <Curriculum />
            <LatestEvent data={data.latestEvents} />
            <OurMentor data={data.mentors} />
            <OurTeam data={data.teamMembers} />
            <Articles data={data.articles} />
            <Testimonials data={data.testimonials} />
            <MeetTheFounder data={data.leaderReviews} />
            <Collaborate />
        </React.Fragment>
    )
}

export default MainPage
