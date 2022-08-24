import React, { useState, useCallback } from "react";
import './style.css';
import { Link } from "react-router-dom";


export function LoginUser() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();

        const response = await fetch("https://fullstack.exercise.applifting.cz/login", {
            method: "POST",
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
                'X-API-KEY': 'dca7877e-b3d6-4988-b724-f0698d48d641'
            },
            body: JSON.stringify({
                username: email,
                password
            })
        });

        const { access_token } = await response.json();

        if (response.status !== 200) {
            return;
        }


        localStorage.setItem("token", access_token);
        window.location.href = "/";
    }, [email, password]);

    // function validateForm() {
    //     return email.length > 0 && password.length > 0;
    // }

   

    return (
        <div>
            <form onSubmit={handleSubmit} className="login">
                <h1>Log In</h1>
                <div className="login-input">
                    <label>Email</label> <br />
                    <input
                        className="form-control"
                        value={email}
                        placeholder="me@example.com"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    ></input>
                </div>
                <div className="pass-input">
                    <label>Password</label> <br />
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="********"
                        required
                    ></input>
                </div>
                <button className="btn" type="submit"> <Link to={'/myarticles'} className='login__btn--link'>
                    Log In
                </Link></button>
            </form>
        </div>
    );
};


// ----Old version with bootstrap-----
//         <div className="login">
//             <Form onSubmit={handleSubmit}>

//                 <Form.Group size="mb-3" controlId="email">
//                     <h2>Log in </h2>
//                     <Form.Label>Email</Form.Label>

//                     <Form.Control
//                         autoFocus
//                         type="email"
//                         placeholder="me@example.com"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                     />
//                 </Form.Group>

//                 <Form.Group size="mb-3" controlId="password">
//                     <Form.Label>Password</Form.Label>

//                     <Form.Control
//                         type="password" placeholder="********"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                 </Form.Group>

//                 <Button className="btn" type="submit">
//                     Log In
//                 </Button>

//             </Form>

//         </div>


//     );

// }