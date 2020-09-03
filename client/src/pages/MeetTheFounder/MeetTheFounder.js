import React from 'react'
import Container from '../../components/Container/Container'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import Slick3 from '../../components/Slick3/Slick3'

const MeetTheFounder = ({data}) => {
    return (
        <div>
            <Container>
                <SectionHeader heading="Meet The Founder" />
                <Slick3 lists={data} />
            </Container>
        </div>
    )
}

export default MeetTheFounder
