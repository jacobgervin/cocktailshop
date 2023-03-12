import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navigation from './nav';
import HeroSection from './hero';
import Products from './products';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Navigation />
  <HeroSection />
  <Products />
  </React.StrictMode>

);

reportWebVitals();
