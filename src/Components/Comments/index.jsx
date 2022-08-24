import React, { useState } from "react";
import axios from "axios";
import { TheComment } from "../Comment";
import cat from "../../pages/ArticleList/cat.jpg"
import "./style.css";

export function TheComments({ comments }) {
    const [comValue, setComValue] = useState({
        comment: "",
    });

    const hendleSubmit = (e) => {
        e.preventDefault();
        axios
            .post(
                "https://my-json-server.typicode.com/janajurcova/AppBlog/comments",
                comValue
            )
            .then((res) => {
                console.log("Comment added");
            })
            .catch((err) => {
                console.log("Error");
            });

        setComValue({ comment: "" });
    };

    return (
        <div className="the-comments">
            <h2>{`Comments (${comments})`}</h2>
            <div className="com-input">
                <form className="new-com" onSubmit={hendleSubmit}>
                    <img className="input-img" src={cat}></img>
                    <input
                        type="text"
                        placeholder="Join the discussion"
                        onChange={(e) =>
                            setComValue({ ...comValue, comment: e.target.value })
                        }
                    ></input>
                </form>
            </div>
            <div>
                {comments.map((a, index) => (
                    <TheComment key={index} comment={a} />
                ))}
            </div>
        </div>
    );
};