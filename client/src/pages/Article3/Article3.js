import React, {useState, useEffect, useRef} from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import Axios from 'axios';
import Container from '../../components/Container/Container';
import Nav from '../../components/Nav/Nav';
import {dateFormat} from '../../functions/functions';
import './Article3.css';

const Article3 = () => {

    const location = useLocation();
    const detailsRef = useRef(null);
    const [article, setArticle] = useState(null);

    useEffect(() => {
        const {id} = queryString.parse(location.search);

        Axios({
            method: 'GET',
            url: `http://localhost:9000/article?id=${id}`,
            withCredentials: true
        })
            .then(response => {
                setArticle(response.data)
            })
    }, [location.search]);

    useEffect(() => {
        if(article) {
            let fullDetails = detailsRef.current.textContent;
            detailsRef.current.innerHTML = fullDetails;
        }
        
    }, [article]);

    return (
        <div className="article3 pb-5 newPage text-white">
            <Container first={true}>
                <Nav />
                {
                    article && (
                        <>
                            <div className="relative">
                                <img className="article3__image" src={require(`../../images/article/${article.image}`)} alt={article.title} />
                                <div className="article3__titleContainer absolute px-5 md:px-10 py-2 md:py-5">
                                    <h3 className="article3__title font-bold text-lg sm:text-xl md:text-2xl mt-5">{article.title}</h3>
                                    <p className="mt-2 text-xs sm:text-sm md:text-base">
                                        Oleh: {article.author}, 
                                        {
                                            dateFormat(article.created)
                                        }
                                    </p>
                                </div>
                            </div>
                            <div className="md:w-4/5 mx-auto">
                                <div ref={detailsRef} className="article3__fullDetails my-8">{article.full_details}</div>
                            </div>
                        </>
                    )
                }
            </Container>
        </div>
    )
}

export default Article3
