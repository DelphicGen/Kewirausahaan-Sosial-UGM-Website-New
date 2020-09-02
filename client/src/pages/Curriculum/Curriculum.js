import React from 'react'
import Container from '../../components/Container/Container'
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import curriculum from '../../images/curriculum/Kurikulum.webp';

const Curriculum = () => {
    return (
        <div>
            <Container>
                <SectionHeader heading="Kurikulum" />
                <img className="curriculum-img" src={curriculum}alt="kurikulum ks" />
            </Container>
        </div>
    )
}

export default Curriculum
