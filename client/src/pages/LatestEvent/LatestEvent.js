import React from 'react';
import Container from '../../components/Container/Container';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import './LatestEvent.css';

const LatestEvent = ({data}) => {

    return (
        <div className="latestEvent">
            <Container>
                <SectionHeader heading="Event Terbaru" />
                <div className="flex flex-row flex-wrap justify-between">
                    {
                        data?.map(link => (
                            <iframe title={link.link} className="latestEvent__event" key={link.id} width="560" height="315" src={link.link} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        ))
                    }
                </div>
            </Container>
        </div>
    )
}

export default LatestEvent
