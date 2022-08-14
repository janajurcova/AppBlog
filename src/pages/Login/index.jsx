import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import './style.css';


export function LoginUser() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="login">
         <div className="d-flex justity-content-center align-items-center">

            <Form onSubmit={handleSubmit}>

                <Form.Group size="mb-3" controlId="email">
                    <h2>Log in </h2>
                    <Form.Label>Email</Form.Label>

                    <Form.Control
                        autoFocus
                        type="email"
                        placeholder="me@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group size="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>

                    <Form.Control
                        type="password" placeholder="********"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

                <Button className="btn" type="submit">
                    Log In
                </Button>

            </Form>

        </div>
        </div>

    );

}