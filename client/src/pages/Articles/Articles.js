import React, {useRef, useEffect} from 'react'
import Container from '../../components/Container/Container'
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Article from '../../components/Article/Article';

const Articles = ({data}) => {

    const detailsRefs = useRef([]);


    useEffect(() => {
        detailsRefs.current.forEach(ref => {
            let fullDetails = ref.textContent;
            ref.innerHTML = fullDetails
        })

    }, [data])

    return (
        <div>
            <Container>
                <SectionHeader heading="Artikel" />
                <div className="flex flex-col md:flex-row items-start lg:items-start justify-between">
                    {
                        data?.map((article, index) => (
                            <Article ref={detailsRefs.current} article={article} index={index} key={article.id} />
                        ))
                    }
                </div>
            </Container>
        </div>
    )
}

export default Articles
