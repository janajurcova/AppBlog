import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import { initialState } from './utils/authorisation.js';
import { ArticleList } from './pages/ArticleList/index.jsx';
import { Article } from './pages/ArticleDetail/index.jsx';
import { Layout } from './Layout';
import { LoginUser } from './pages/Login';
import { EditArticle } from './pages/EditArticle/index.jsx';
import './style.css';


  // // add entity - POST
  // // creates entity
  // fetch("https://fullstack.exercise.applifting.cz/tenants", {
  //   "method": "POST",
  //   "headers": {
  //     "content-type": "application/json",
  //     "accept": "application/json"
  //   },
  //   "body": JSON.stringify
  //   (
  //       {
  //         "name": "janajurcova",
  //         "password": "heslo123"
  //       }
  //   )
  // })
  //   .then(response => response.json())
  //   .then(response => {
  //     console.log(response)
  //     // apiKey 
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });

// { tenantId: 'b6d21e77-7341-46d2-bee6-e0d84ecef7cb', apiKey: 'dca7877e-b3d6-4988-b724-f0698d48d641', name: 'janajurcova', createdAt: '2022-08-09T20:19:28.0256314Z', lastUsedAt: null }
// apiKey: "dca7877e-b3d6-4988-b724-f0698d48d641"
// createdAt: "2022-08-09T20:19:28.0256314Z"
// lastUsedAt: null
// name: "janajurcova"
// tenantId: "b6d21e77-7341-46d2-bee6-e0d84ecef7cb"
// add entity - POST
// creates entity

// function Login() {
// fetch('https://fullstack.exercise.applifting.cz/login', {
//   method: 'POST',
//   headers: {
//     'content-type': 'application/json',
//     'accept': 'application/json',
//     'X-API-KEY': 'dca7877e-b3d6-4988-b724-f0698d48d641',
//   },
//   body: JSON.stringify
//     (
//       {
//         username: 'janajurcova',
//         // "password": "heslo123"
//         password: 'heslo123'
//       }
//     )
// })
//   .then(response => response.json())
//   .then(response => {
//     // const obj = JSON.parse(response);
//     initialState.access_token = response.access_token;
//     initialState.username = 'janajurcova';
//     console.log(initialState.access_token)
//     // xApiKey 
//   })
//   .catch(err => {
//     console.log(err);
//   });
// };

// Login();
// // if username...



const App = () => { 
//   <div>
//     <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
//       <Link to="/articlelist">Article list</Link>|{' '}
//       <Link to="/article">Article detail</Link>
//     </nav>
//     <Outlet />
//   </div>
// );

return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="articlelist" element={<ArticleList />} />
          <Route path="article" element={<Article />} />
          <Route path="login" element={<LoginUser />} />
          <Route path="editarticle" element={<EditArticle />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

createRoot(document.querySelector('#app')).render(<App />);

