import React, { useState } from "react";
import axios from "axios";
import TheComment from "../comment/TheComment";
import profile from "../../assets/profile.jpg";

import "../comments/comments.scss";

export function TheComments({ comments }) {
    const [comValue, setComValue] = useState({
        comment: "",
    });

    const hendleSubmit = (e) => {
        e.preventDefault();
        axios
            .post(
                "https://my-json-server.typicode.com/",
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
            <h2>{`Comments (${comments.length})`}</h2>
            <div className="com-input">
                <form className="new-com" onSubmit={hendleSubmit}>
                    <img className="input-img" src={profile}></img>
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