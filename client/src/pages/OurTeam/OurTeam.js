import React from 'react'
import Container from '../../components/Container/Container'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import Slick from '../../components/Slick/Slick'

const OurTeam = ({data}) => {

    return (
        <div>
            <Container>
                <SectionHeader heading="Tim Kita" />
                <Slick lists={data} imageUrl="team_member" />
            </Container>
        </div>
    )
}

export default OurTeam
