import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TheButton } from "../../Components/Button";
import "./style.css";
import axios from "axios";
import { IoPencil, IoTrashOutline } from "react-icons/io5";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

export function MyArticles() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios("https://my-json-server.typicode.com/janajurcova/AppBlog/articles")
            .then((res) => setData(res.data))
            .catch((err) => console.error(err));
    }, []);

    const hendleDelete = () => {
        axios
            .delete("https://my-json-server.typicode.com")
            .then((res) => {
                console.log("Article was deleted");
            })
            .catch((err) => {
                console.log("Error");
            });
    };

    return (
        <div className="my-articles">
            <div className="my-articles__header ">
                <h1>My Articles</h1>
                <Link to={"/newarticle"}>
                    <TheButton className="my-articles__btn" value="Create New Article" />
                </Link>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>
                            <input className="checkbox" type="checkbox"></input>
                        </th>
                        <th>
                            Article title{" "}
                            <div className="tit-arrows">
                                <TiArrowSortedUp />
                                <TiArrowSortedDown />
                            </div>
                        </th>
                        <th>
                            Perex{" "}
                            <div className="per-arrows">
                                <TiArrowSortedUp />
                                <TiArrowSortedDown />
                            </div>
                        </th>
                        <th>
                            Author{" "}
                            <div className="aut-arrows">
                                <TiArrowSortedUp />
                                <TiArrowSortedDown />
                            </div>
                        </th>
                        <th>
                            # of comments{" "}
                            <div className="com-arrows">
                                <TiArrowSortedUp />
                                <TiArrowSortedDown />
                            </div>
                        </th>
                        <th className="action">action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((d, index) => (
                        <tr key={index}>
                            <td>
                                <input type="checkbox"></input>
                                
                            </td>
                            
                            <td>{d.title.substring(0, 25)}...</td>
                            <td>{d.perex.substring(0, 80)}...</td>
                            <td>{d.author}</td>
                            <td>{d.comments}</td>
                            <td>
                                <Link to={"/editarticle"}>
                                    <IoPencil />
                                </Link>

                                <IoTrashOutline onClick={hendleDelete} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};