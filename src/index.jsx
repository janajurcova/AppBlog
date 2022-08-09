import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import { initialState } from './utils/authorisation.js';
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
function Login() {
fetch('https://fullstack.exercise.applifting.cz/login', {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
    'accept': 'application/json',
    'X-API-KEY': 'dca7877e-b3d6-4988-b724-f0698d48d641',
  },
  body: JSON.stringify
    (
      {
        username: 'janajurcova',
        // "password": "heslo123"
        password: 'heslo123'
      }
    )
})
  .then(response => response.json())
  .then(response => {
    // const obj = JSON.parse(response);
    initialState.access_token = response.access_token;
    initialState.username = 'janajurcova';
    console.log(initialState.access_token)
    // xApiKey 
  })
  .catch(err => {
    console.log(err);
  });
};

Login();
// if username...

function RecentArticles() {
  fetch('https://fullstack.exercise.applifting.cz/articles', {
    mode: "no-cors",
    method: 'GET',
    headers: {
      // 'content-type': 'application/json',
      'accept': 'application/json',
      'X-API-KEY': 'dca7877e-b3d6-4988-b724-f0698d48d641',
      'authorisation': `${initialState.access_token}`
    },
    body: JSON.stringify
      (
        {
          offset: 0,
          limit: 10
        }
      )
  })
    .then(response => response.json())
    .then(response => {
      console.log('10', response)
      // xApiKey 
    })
    .catch(err => {
      console.log(err);
    });
    
  // "X-API-KEY": initialState.xApiKey,
  //   Authorization: "dca7877e-b3d6-4988-b724-f0698d48d641",

  return (
    <main style={{ padding: '1rem 0' }}>
      <h2>Recent Articles</h2>
    </main>
  );
}


function Article() {
  return (
    <main style={{ padding: '1rem 0' }}>
      <h2>Article</h2>
    </main>
  );
}


const App = () => (
  <div>
    <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
      <Link to="/invoices">Article</Link> |{' '}
      <Link to="/expenses">Recent Article</Link>
    </nav>
    <Outlet />
  </div>
);

createRoot(document.querySelector('#app')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<RecentArticles />} />
        <Route path="invoices" element={<Article />} />
      </Route>
    </Routes>
  </BrowserRouter>
);


