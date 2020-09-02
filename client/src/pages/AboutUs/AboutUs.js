import React from 'react'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import Container from '../../components/Container/Container';
import './AboutUs.css';
import startups from '../../images/about_us/rocket2.webp';
import participants from '../../images/about_us/people.svg';
import partners from '../../images/about_us/handyman.svg';
import events from '../../images/about_us/date.svg';

const AboutUs = () => {
    return (
        <div className="aboutUs">
            <Container>
                
                <SectionHeader heading="Kuliah Kewirausahaan Sosial" />
                
                <p className="aboutUs__details mb-16 text-center mx-auto w-full md:w-4/5 lg:w-3/5">Kuliah Kewirausahaan Sosial didasari oleh kegelisahaan atas ketidaksinkronan dunia pendidikan dengan dunia luar. Belajar dari yang ahli, dosen menjadi fasilitator.</p>

                <div className="aboutUs__statistics flex justify-around sm:justify-between flex-wrap">
                    <div className="aboutUs__statistic text-white text-center rounded-full p-5 flex flex-col justify-around">
                        <img src={startups} alt="rocket" />
                        <h4 className="text-xl md:text-2xl">8</h4>
                        <h5 className="text-lg md:text-xl">Startups</h5>
                    </div>
                    <div className="aboutUs__statistic text-white text-center rounded-full p-5 flex flex-col justify-around">
                        <img src={participants} alt="people" />
                        <h4 className="text-xl md:text-2xl">7000</h4>
                        <h5 className="text-lg md:text-xl">Participants</h5>
                    </div>
                    <div className="aboutUs__statistic text-white text-center rounded-full p-5 flex flex-col justify-around">
                        <img src={partners}alt="handyman" />
                        <h4 className="text-xl md:text-2xl">16</h4>
                        <h5 className="text-lg md:text-xl">Partners</h5>
                    </div>
                    <div className="aboutUs__statistic text-white text-center rounded-full p-5 flex flex-col justify-around">
                        <img src={events} alt="date" />
                        <h4 className="text-xl md:text-2xl">20</h4>
                        <h5 className="text-lg md:text-xl">Events</h5>
                    </div>
                </div>

            </Container>
        </div>
    )
}

export default AboutUs
