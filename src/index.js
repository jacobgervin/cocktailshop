import React from 'react';
import ReactDOM from 'react-dom/client';
import AgeVerificationModal from './ageverification';

import './index.css';

import reportWebVitals from './reportWebVitals';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AgeVerificationModal />
  <App />
  </React.StrictMode>

);

reportWebVitals();
