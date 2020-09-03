import React, {useState} from 'react'
import Container from '../../components/Container/Container'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import Slick2 from '../../components/Slick2/Slick2'

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([
        {
            id: 0,
            name: 'Fahmi Ghozali',
            details: 'Perkuliahan ini sangat pengasikkan, seru, tidak membosankan dan memberikan pandangan semakin luas mengenai kewirausahaan sosial.',
            image: 'FahmiGhozali2.webp'
        },
        {
            id: 1,
            name: 'Fahmi Ghozali',
            details: 'Perkuliahan ini sangat pengasikkan, seru, tidak membosankan dan memberikan pandangan semakin luas mengenai kewirausahaan sosial.',
            image: 'FahmiGhozali2.webp'
        },
        {
            id: 2,
            name: 'Fahmi Ghozali',
            details: 'Perkuliahan ini sangat pengasikkan, seru, tidak membosankan dan memberikan pandangan semakin luas mengenai kewirausahaan sosial.',
            image: 'FahmiGhozali2.webp'
        },
        {
            id: 3,
            name: 'Fahmi Ghozali',
            details: 'Perkuliahan ini sangat pengasikkan, seru, tidak membosankan dan memberikan pandangan semakin luas mengenai kewirausahaan sosial.',
            image: 'FahmiGhozali2.webp'
        }
    ])

    return (
        <div>
            <Container>
                <SectionHeader heading="Testimonial" />
                <Slick2 lists={testimonials} />
            </Container>
        </div>
    )
}

export default Testimonials
