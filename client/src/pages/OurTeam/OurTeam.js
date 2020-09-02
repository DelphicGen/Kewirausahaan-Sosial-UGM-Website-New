import React, {useState} from 'react'
import Container from '../../components/Container/Container'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import Slick from '../../components/Slick/Slick'

const OurTeam = () => {
    const [members, setMembers] = useState([
        {
            id: 0,
            name: 'Ageng Sajiwo',
            title: 'Chief Operation & Technology',
            image: 'agengsajiwo.webp',
            facebook: 'https://facebook.com',
            twitter: 'https://facebook.com',
            instagram: 'https://facebook.com',
            linkedin: 'https://facebook.com'
        },
        {
            id: 1,
            name: 'Prof. Dr. Pratikno, M.Soc.SC',
            title: 'Inisiator Perkuliahan Kewirausahaan Sosial UGM',
            image: 'pratikno.webp',
            facebook: 'https://facebook.com',
            twitter: 'https://facebook.com',
            instagram: 'https://facebook.com',
            linkedin: 'https://facebook.com'
        },
        {
            id: 2,
            name: 'Bayu Dardias Kurniadi, M.A. M.Pub.Pol, Ph.D.',
            title: 'Dosen Pengampu Kewirausahaan Sosial UGM',
            image: 'bayudardias.webp',
            facebook: 'https://facebook.com',
            twitter: 'https://facebook.com',
            instagram: 'https://facebook.com',
            linkedin: 'https://facebook.com'
        },
        {
            id: 3,
            name: 'Widya Priyahita Pudjibudojo',
            title: 'Chief Strategy and Partnership',
            image: 'widyapriyahita.webp',
            facebook: 'https://facebook.com',
            twitter: 'https://facebook.com',
            instagram: 'https://facebook.com',
            linkedin: 'https://facebook.com'
        }
    ])

    return (
        <div>
            <Container>
                <SectionHeader heading="Tim Kita" />
                <Slick lists={members} imageUrl="team_member" />
            </Container>
        </div>
    )
}

export default OurTeam
