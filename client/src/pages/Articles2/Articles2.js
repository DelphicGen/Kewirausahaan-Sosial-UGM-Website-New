import React, {useState, useEffect, useRef} from 'react'
import Container from '../../components/Container/Container'
import Nav from '../../components/Nav/Nav'
import Axios from 'axios';
import Article2 from '../../components/Article2/Article2';

const Articles2 = () => {

    const [articles, setArticles] = useState(null);
    const detailsRefs = useRef([]);

    useEffect(() => {
        Axios({
            method: 'GET',
            url: 'http://localhost:9000/articles',
            withCredentials: true
        })
            .then(response => {
                setArticles(response.data);
            })
    }, []);

    useEffect(() => {
        if(articles) {
            detailsRefs.current.forEach(ref => {
                let fullDetails = ref.textContent;
                ref.innerHTML = fullDetails
            })
        }

    }, [articles])

    return (
        <div className="articles2 newPage text-white">
            <Container first={true}>
                <Nav />
                {
                    articles?.map((article, index) => (
                        <Article2 key={article.id} ref={detailsRefs.current} article={article} index={index} />
                    ))
                }
            </Container>
        </div>
    )
}

export default Articles2
