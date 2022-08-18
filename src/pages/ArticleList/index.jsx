import React from 'react'
import { initialState } from '../../utils/authorisation.js';
import { Link, Outlet } from 'react-router-dom';
import { Article } from '../ArticleDetail/index.jsx';
import './style.css'
import cat from './cat.jpg';



export function ArticleList({ article }) {
    // fetch('https://fullstack.exercise.applifting.cz/articles', {
    //     mode: "no-cors",
    //     method: 'GET',
    //     headers: {
    //         // 'content-type': 'application/json',
    //         'accept': 'application/json',
    //         'X-API-KEY': 'dca7877e-b3d6-4988-b724-f0698d48d641',
    //         'authorisation': `${initialState.access_token}`
    //     },
    //     body: JSON.stringify(
    //             {
    //                 offset: 0,
    //                 limit: 10
    //             }
    //         )
    // })
    //     .then((response) => response.json())
    //     .then(response => {
    //         console.log('10', response)
    //         // xApiKey 
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });

    // "X-API-KEY": initialState.xApiKey,
    //   Authorization: "dca7877e-b3d6-4988-b724-f0698d48d641",
   

    return (
//         <div className="article-list">
//             <h1>Recent articles</h1>
//             <div className="articles">
//                 {articles.map((a, index) => (
//                     <Article key={index} article={a} />
//                 ))}
//             </div>
//         </div>
//     );
// };
        <main style={{ padding: '1rem 0' }}>
            <h2>Recent Articles</h2>
            <section className="article">
                <div className="img"><img src={cat} /></div>
                <div className="preview">
                    <div className="title"><h4> </h4></div>
                    <div className="author"> °  02/13/17</div>
                    <div className="text">A cat's whiskers — or vibrissae — are a well-honed sensory tool that helps a cat see in the dark and steer clear of hungry predators. Whiskers are highly sensitive tactile hairs that grow in patterns on a cat's muzzle, above its eyes and elsewhere on its body, like the ears, jaw and forelegs</div>
                    <div className="comments">Read whole article  4 comments</div>
                </div>
            </section>
            <div className="article">
                <div className="img"><img src={cat} /></div>
                <div className="preview">
                    <div className="title"><h4>Why Do Cats Have Whiskers?</h4></div>
                    <div className="author">Elisabeth Strain  °  02/13/17</div>
                    <div className="text">A cat's whiskers — or vibrissae — are a well-honed sensory tool that helps a cat see in the dark and steer clear of hungry predators. Whiskers are highly sensitive tactile hairs that grow in patterns on a cat's muzzle, above its eyes and elsewhere on its body, like the ears, jaw and forelegs</div>
                    <div className="comments">Read whole article  4 comments</div>
                </div>
            </div>
            <div className="article">
                <div className="img"><img src={cat} /></div>
                <div className="preview">
                    <div className="title"><h4>Why Do Cats Have Whiskers?</h4></div>
                    <div className="author">Elisabeth Strain  °  02/13/17</div>
                    <div className="text">A cat's whiskers — or vibrissae — are a well-honed sensory tool that helps a cat see in the dark and steer clear of hungry predators. Whiskers are highly sensitive tactile hairs that grow in patterns on a cat's muzzle, above its eyes and elsewhere on its body, like the ears, jaw and forelegs</div>
                    <div className="comments">Read whole article  4 comments</div>
                </div>
            </div>
            <div className="article">
                <div className="img"><img src={cat} /></div>
                <div className="preview">
                    <div className="title"><h4>Why Do Cats Have Whiskers?</h4></div>
                    <div className="author">Elisabeth Strain  °  02/13/17</div>
                    <div className="text">A cat's whiskers — or vibrissae — are a well-honed sensory tool that helps a cat see in the dark and steer clear of hungry predators. Whiskers are highly sensitive tactile hairs that grow in patterns on a cat's muzzle, above its eyes and elsewhere on its body, like the ears, jaw and forelegs</div>
                    <div className="comments">Read whole article  4 comments</div>
                </div>
            </div>
            <div className="article">
                <div className="img"><img src={cat} /></div>
                <div className="preview">
                    <div className="title"><h4>Why Do Cats Have Whiskers?</h4></div>
                    <div className="author">Elisabeth Strain  °  02/13/17</div>
                    <div className="text">A cat's whiskers — or vibrissae — are a well-honed sensory tool that helps a cat see in the dark and steer clear of hungry predators. Whiskers are highly sensitive tactile hairs that grow in patterns on a cat's muzzle, above its eyes and elsewhere on its body, like the ears, jaw and forelegs</div>
                    <div className="comments">Read whole article  4 comments</div>
                </div>
            </div>

        </main>
    );
}

