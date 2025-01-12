import React from 'react';
import ReactDOM from 'react-dom/client';  // Make sure you're importing from 'react-dom/client'

import App from './App';

// Create a root element and render the app using createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
