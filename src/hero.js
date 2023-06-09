import React from 'react';
import './HeroSection.css'; // Import your CSS file for styling
import Cocktailshopsvg from './cocktailshopsvg';


function HeroSection() {
  return (
    <div className="h-screen container flex flex-col md:flex-row mx-auto">
      <div className='h-1/3 md:h-screen w-screen md:w-1/2 flex flex-col justify-end md:justify-center items-center md:items-start text-center md:text-left'>
      <h1 className="hero-text text-2xl md:text-6xl font-black">ENJOY AMAZING COCKTAILS</h1>
      <h3 className='here-subtitle font-light text-xl md:text-2xl my-3 uppercase'>THE COCKTAILBAR EXPERIENCE at home</h3>
      <button class="text-white bg-gradient-to-br w-24 from-purple-600 px-2 mt-2 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 cursor-pointer focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-sm  py-2.5 text-center items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-bold"><a href="#products">SHOP NOW</a></button>
      </div>
      <div className='w-screen md:w-1/2 h-2/3 md:h-screen flex flex-col justify-center items-center '>
        <div className='h-2/3 w-2/3 flex flex-col justify-center items-center'>
      <Cocktailshopsvg />
      </div>
      </div>
    </div>
  );
}

export default HeroSection;