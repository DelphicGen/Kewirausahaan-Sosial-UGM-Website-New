import React from 'react';
import Button from '../Button/Button';
import './Article.css';

const Article = ({article, index}) => {
    return (
        <div className={`article mr-2 ${index !== 0 && 'mt-4'} lg:mt-0 border-2 rounded-lg relative`}>
            <img src={require(`../../images/article/${article.image}`)} className="article__image" alt={article.title} />

            <div className="p-4">
                <h5 className="mb-3 font-bold">{article.title}</h5>
                <p className="article__details">{article.full_details}</p>
                <div className="article__btn">
                    <Button />
                </div>
            </div>
        </div>
    )
}

export default Article
