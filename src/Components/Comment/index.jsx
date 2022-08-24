import React, { useState } from "react";
import cat from '../../pages/ArticleList/cat.jpg'
import "./style.css";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

export function TheComment ({ comment }) {
    const [count, setCount] = useState(0);
    return (
        <div className="comment">
            <div className="com">
                <img className="profile-img" src={cat}></img>
                <div className="name-time">
                    <h3>{comment.author}</h3>
                    <span>2 hours ago</span>
                </div>
                <p className="comment-p">{comment.comment}</p>
                <div className="com-icons">
                    <span>{count}</span>
                    <div className="up">
                        <IoChevronUp onClick={() => setCount(count + 1)} />
                    </div>
                    <div className="down">
                        <IoChevronDown onClick={() => setCount(count - 1)} />
                    </div>
                </div>
            </div>
        </div>
    );
};
