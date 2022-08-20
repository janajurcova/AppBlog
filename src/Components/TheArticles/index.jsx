import React from "react";
import { TheArticle } from "../TheArticle";
import "./style.css";

export function TheArticles({ articles }) {
    return (
        <div className="the-articles">
            <h1>Recent articles</h1>
            <div className="articles">
                {articles.map((a, index) => (
                    <TheArticle key={index} article={a} />
                ))}
            </div>
        </div>
    );
};