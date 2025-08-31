import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css'; // Global styles
import Home from './Pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
