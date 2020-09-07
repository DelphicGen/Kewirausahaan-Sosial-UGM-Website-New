import React from 'react';
import './Article.css';
import { Link } from 'react-router-dom';

const Article = React.forwardRef(({article, index}, ref) => {

    return (
        <div className={`article ${index !== 0 && 'mt-10'} md:mt-0 rounded-lg relative`}>
            <img src={require(`../../images/article/${article.image}`)} className="article__image" alt={article.title} />

            <div className="article__details p-5">
                <h5 className="article__title mb-3 font-bold text-xl">{article.title}</h5>
                <p ref={el => ref[index] = el} className="article__text mb-5">{article.full_details}</p>
            </div>
            <div className="flex flex-wrap justify-between p-5 items-center border-t-2">
                <small>Oleh {article.author}</small>
                <Link to={`/article?id=${article.id}`}>
                    <span style={{color: '#0F5BB1'}} className="font-bold">Selengkapnya</span>
                </Link>
            </div>
        </div>
    )
})

export default Article
