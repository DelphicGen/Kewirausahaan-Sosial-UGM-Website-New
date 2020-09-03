import React from 'react'
import Container from '../../components/Container/Container'
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Article from '../../components/Article/Article';

const Articles = ({data}) => {

    return (
        <div>
            <Container>
                <SectionHeader heading="Artikel" />
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center">
                    {
                        data?.map((article, index) => (
                            <Article article={article} index={index} key={article.id} />
                        ))
                    }
                </div>
            </Container>
        </div>
    )
}

export default Articles
