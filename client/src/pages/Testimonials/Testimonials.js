import React from 'react'
import Container from '../../components/Container/Container'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import Slick2 from '../../components/Slick2/Slick2'

const Testimonials = ({data}) => {

    return (
        <div>
            <Container>
                <SectionHeader heading="Testimonial" />
                <Slick2 lists={data} />
            </Container>
        </div>
    )
}

export default Testimonials
