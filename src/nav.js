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
    
    <h2>Cocktail-Shop</h2>

  </div>
  <button onClick={handleClick} className="bg-gray-800 text-white px-3 py-2 rounded-md lg:absolute lg:right-1.5">
    Cart ({selectedCocktails ? selectedCocktails.length : 0})
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
