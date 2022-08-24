import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import cat from '../../pages/ArticleList/cat.jpg';


export function TheArticle({ article }) {
    return (
        <div>
            <div className="the-articles">
                <div className="one-article">
                    <img src={cat} alt="photo" />
                    <div className="article-info">
                        <h2>{article.title}</h2>
                        <div className="aut-date">
                            <span>{article.author}</span>
                            
                            <span>{article.date}</span>
                        </div>
                        <p className="article-text">{article.text}</p>
                        <div className="link-com">
                            <Link to={`/single/${article.id}`}>
                                <span>Read whole article</span>
                            </Link>
                            <span className="com">{`${article.comments} comments`}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};