import React from "react";
import { Form } from "../../Components/FormNewArticle";


import "./style.css";

export function EditArticle() {
    return (
        <div className="edit-form">
            <div className="edit-header-but">
                <h1>Edit article</h1>
                <button value="Publish Article" />
            </div>
            <Form />
        </div>
    );
};