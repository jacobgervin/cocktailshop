import React, { useState } from 'react';
import Cart from './cart';





const Navigation = ({ selectedCocktails, removeFromCart, addToCart}) => {
  const [isExpanded, toggleExpansion] = useState(false);

  const [show, setShow] = useState(false);



  const handleClick = () => {
    setShow(!show);
  };

  const handleCloseCart = () => {
    setShow(false);
  };
  

  return (
 <div className='relative z-40'>
    <div className='flex flex-row fixed bg-slate-900 '>
    <nav className="flex items-center justify-between flex-wrap bg-black-500 p-6 w-screen">
  <div className="flex items-center flex-shrink-0 text-white mr-6">
    
    <h2 className='font-bold'>Cocktail-Shop</h2>

  </div>
  <button onClick={handleClick} className="text-white px-3 py-2 rounded-md lg:absolute lg:right-1.5">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-6 h-6">
  <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
</svg>
<span className="absolute top-0 right-0 bg-red-500 text-white font-bold rounded-full text-xs px-1">{selectedCocktails ? selectedCocktails.length : 0}</span>
  </button>

  <div className="block lg:hidden">
    <button
    className="flex items-center px-3 py-2 border rounded text-white-200 border-black-400 hover:text-white hover:border-white"
    onClick={() => toggleExpansion(!isExpanded)}
    >
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div  className={`${
            isExpanded ? `block` : `hidden`
          } bg-slate-900 w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
    <div className="text-sm lg:flex-grow bg-slate-900">
      <a href="/products" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 hover:text-white mr-4">
Products
      </a>
      <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 hover:text-white mr-4">
       About
      </a>
      
    </div>
  </div>


</nav>
</div>
{show && <div className="rounded-md absolute top-0 right-0"><Cart selectedCocktails={selectedCocktails} removeFromCart={removeFromCart} handleCloseCart={handleCloseCart} /></div>}
</div>
  )
}

export default Navigation
