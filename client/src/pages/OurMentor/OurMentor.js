import React from 'react';
import Container from '../../components/Container/Container';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Slick from '../../components/Slick/Slick';

const OurMentor = ({data}) => {

    return (
        <div className="mentors">
            <Container>
                <SectionHeader heading="Mentor Kita" />
                <Slick lists={data} imageUrl="mentor" />  
            </Container>
        </div>
    )
}

export default OurMentor
