import React from 'react';
import Nav from '../../components/Nav/Nav';
import Container from '../../components/Container/Container';
import './HeaderImage.css';

const HeaderImage = () => {
    return (
        <div className="text-white headerImage overflow-hidden relative">
            <span className="headerImage__watermark absolute font-bold">Kewirausahaan</span>
            <div className="headerImage__filter relative overflow-hidden">
                <Container first={true}>
                    <Nav headerImage={true} />
                    <div className="headerImage__container w-full lg:w-4/5">
                        <div className="headerImage__headingList text-white ">
                            <h1 className="headerImage__mainHeader pl-5 uppercase text-5xl md:text-6xl font-bold mb-6">Bentuk Mindset Wirausaha</h1>
                            <h5 className="headerImage__secondaryHeader font-medium text-xl leading-relaxed">Menginspirasi peserta kuliah untuk menemukan cara baru dalam mengatasi permasalahan sosial, khususnya melalui kewirausahaan sosial.</h5>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default HeaderImage
