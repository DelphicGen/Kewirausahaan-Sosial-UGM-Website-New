import React, {useState} from 'react';

import Container from '../../components/Container/Container';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import './OurMentor.css';
import Slick from '../../components/Slick/Slick';

const OurMentor = () => {
    const [mentors, setMentors] = useState([
        {
            id: 0,
            name: 'Lingga Madu',
            title: 'Co-Founder Sorabel',
            image: 'linggamadu.webp',
            facebook: 'https://facebook.com',
            twitter: 'https://facebook.com',
            instagram: 'https://facebook.com',
            linkedin: 'https://facebook.com'
        },
        {
            id: 1,
            name: 'Delta Purna Widyangga',
            title: 'CEO Co-Founder Qiscus',
            image: 'deltapurna.webp',
            facebook: 'https://facebook.com',
            twitter: 'https://facebook.com',
            instagram: 'https://facebook.com',
            linkedin: 'https://facebook.com'
        },
        {
            id: 2,
            name: 'Andy Fajar Handika',
            title: 'Founder Kulina & Chef Revenue Officer Cookpad',
            image: 'andyfajar.webp',
            facebook: 'https://facebook.com',
            twitter: 'https://facebook.com',
            instagram: 'https://facebook.com',
            linkedin: 'https://facebook.com'
        }
    ])

    return (
        <div className="mentors">
            <Container>
                <SectionHeader heading="Mentor Kita" />
                <Slick lists={mentors} imageUrl="mentor" />  
            </Container>
        </div>
    )
}

export default OurMentor
