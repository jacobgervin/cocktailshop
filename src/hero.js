import React from 'react';
import './HeroSection.css'; // Import your CSS file for styling
import heroimage from './heroimg.png';

function HeroSection() {
  return (
    <div className="hero-section">
        <img src={heroimage} alt="cocktails" className='hero-image' />
      <h1 className="hero-text text-3xl font-black">A GOOD COCKTAIL <br></br> DEMANDS GREAT LIQUOR</h1>
      <h3 className='here-subtitle font-extralight'>We have everything you need, to make the best cocktail</h3>
    </div>
  );
}

export default HeroSection;