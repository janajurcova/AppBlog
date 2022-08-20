import React from "react";
import { TheButton } from "../../Components/Button";
import { Form } from "../../Components/FormNewArticle";


import "./style.css";

export function EditArticle() {
    return (
        <div className="edit-form">   
            <div className="edit-header-but">
                <h1>Edit article</h1>
                <TheButton value="Publish Article" />
                
            </div>
            <Form />
        </div>
    );
};