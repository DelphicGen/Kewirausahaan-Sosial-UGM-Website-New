import React, { useState } from 'react'
import Container from '../../components/Container/Container'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import Slick3 from '../../components/Slick3/Slick3'

const MeetTheFounder = () => {

    const [leaderReviews, setLeaderReview] = useState([
        {
            id: 0,
            name: 'Intan Nisaaul Chusna',
            title: 'Founder & CEO Rumah Harmonis',
            details: 'Pejuang social entrepreneurship tidak bertahan karena uang, tapi impact yang ingin dia berikan kepada masyarakat, khususnya kaum rentan.',
            image: 'IntanNisaaul2.webp'
        },
        {
            id: 1,
            name: 'Intan Nisaaul Chusna',
            title: 'Founder & CEO Rumah Harmonis',
            details: 'Pejuang social entrepreneurship tidak bertahan karena uang, tapi impact yang ingin dia berikan kepada masyarakat, khususnya kaum rentan.',
            image: 'IntanNisaaul2.webp'
        },
        {
            id: 2,
            name: 'Intan Nisaaul Chusna',
            title: 'Founder & CEO Rumah Harmonis',
            details: 'Pejuang social entrepreneurship tidak bertahan karena uang, tapi impact yang ingin dia berikan kepada masyarakat, khususnya kaum rentan.',
            image: 'IntanNisaaul2.webp'
        }
    ])

    return (
        <div>
            <Container>
                <SectionHeader heading="Meet The Founder" />
                <Slick3 lists={leaderReviews} />
            </Container>
        </div>
    )
}

export default MeetTheFounder
