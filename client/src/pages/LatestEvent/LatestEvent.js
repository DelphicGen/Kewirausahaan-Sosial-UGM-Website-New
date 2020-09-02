import React, {useState} from 'react';
import Container from '../../components/Container/Container';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import './LatestEvent.css';

const LatestEvent = () => {

    const [links, setLinks] = useState(["https://www.youtube.com/embed/sV5pC9F_KnM", "https://www.youtube.com/embed/iJjpK_6u0-I"])

    return (
        <div className="latestEvent">
            <Container>
                <SectionHeader heading="Event Terbaru" />
                <div className="flex flex-row flex-wrap justify-between">
                    {
                        links.map(link => (
                            <iframe title={link} className="latestEvent__event" key={link} width="560" height="315" src={link} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        ))
                    }
                </div>
            </Container>
        </div>
    )
}

export default LatestEvent
