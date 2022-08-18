import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css";


export function NewArticle() {
    const [formValue, setFormValue] = useState({
        title: "",
        text: "",
    });

    const navigate = useNavigate();

    const getDate = () => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, "0");
        let mm = String(today.getMonth() + 1).padStart(2, "0");
        let yyyy = today.getFullYear();

        today = dd + "/" + mm + "/" + yyyy;
        return today;
    };

    const hendleSubmit = (e) => {
        e.preventDefault();
        const today = getDate();
        const newArticle = { ...formValue, date: today };

        axios
            .post(
                "https://my-json-server.typicode.com/",
                newArticle
            )
            .then((res) => {
                console.log("Blog Updated Successfully");
                alert("Článek přidán");
            })
            .catch((err) => {
                console.log("Error");
            });

        setFormValue({ title: "", text: "" });
        navigate("/");
    };

    const onInputChange = (e) => {
        let { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    };

    return (
        <div>
            <div className="new-form">
                <form className="new-article" onSubmit={hendleSubmit}>
                    <div className="header-but">
                        <h1>Create new article</h1>
                        <TheButton value="Publish Article" />
                    </div>
                    <div className="article-title">
                        <span>Article Title</span> <br />
                        <input
                            type="text"
                            name="title"
                            className="form-control"
                            onChange={onInputChange}
                        ></input>
                    </div>

                    <div className="uploade-img">
                        <span>Featured image</span>
                        <TheButton value="Upload an Image" />
                    </div>
                    <div className="content">
                        <span>Content</span>
                        <textarea
                            type="textarea"
                            name="text"
                            className="form-control"
                            onChange={onInputChange}
                            rows="50"
                            cols="150"
                        ></textarea>
                    </div>
                </form>
            </div>
            )
        </div>
    );
};