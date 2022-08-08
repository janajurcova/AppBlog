import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import './style.css';

function RecentArticles() {
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


