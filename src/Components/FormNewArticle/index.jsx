import React from "react";
import { TheButton } from "../Button"

import "./style.css";

export function Form() {
    return (
        <div className="form">
            <form className="new-article">
                <div className="article-title">
                    <span>Article Title</span> <br />
                    <input type="text" className="form-control"></input>
                </div>
                <div className="uploade-img">
                    <p>Featured image</p>
                    <TheButton value="Upload an Image" />
                </div>
                <div className="content">
                    <span>Content</span>
                    <textarea
                        type="textarea"
                        className="form-control"
                        rows="50"
                        cols="150"
                    ></textarea>
                </div>
            </form>
        </div>
    );
};