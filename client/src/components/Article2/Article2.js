import React from 'react';
import { Link } from 'react-router-dom';
import './Article2.css';
import {dateFormat} from '../../functions/functions';

const Article2 = React.forwardRef(({article, index}, ref) => {
    return (
        <div className={`article2 ${index === 0 ? 'pb-10' : 'py-10 border-t-2'} flex flex-col md:flex-row justify-center`}>
            <img className="article2__image w-full md:w-1/3 mr-5" src={require(`../../images/article/${article.image}`)} alt={article.title} />
            <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-bold">{article.title}</h3>
                <small className="inline-block mb-3">Oleh {article.author}, {dateFormat(article.created)}</small>
                <p ref={el => ref[index] = el} className="article2__fullDetails mb-5">{article.full_details}</p>
                <Link to={`/article?id=${article.id}`}>
                    <span className="font-bold text-white">Selengkapnya</span>
                </Link>
            </div>
        </div>
    )
})

export default Article2
