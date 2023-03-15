import React, { useState } from 'react';
import Cart from './cart';





const Navigation = ({ selectedCocktails, removeFromCart, addToCart, updateQuantity}) => {
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
    
    <a href="/" class="flex items-center">
    <svg fill="#fff" className='h-5 w-5' viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#fff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>drink3</title> <path d="M26.562 8.021l-10.496 9.213v11.939l5.841 2.827h-13.689l5.842-2.826v-11.94l-10.622-9.213h16.202l3.243-5.619 0.872 0.503-2.953 5.115h5.76zM24.111 8.965l-3.863 0.015-1.19 2.062h2.745l2.308-2.077zM16.066 15.069c0.591 0 1.069-0.479 1.069-1.070s-0.479-1.070-1.069-1.070-1.070 0.479-1.070 1.070c0 0.592 0.48 1.070 1.070 1.070zM5.89 8.965l2.327 2.077h9.679l1.188-2.057-13.194-0.020z"></path> </g></svg>
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white ml-2">CocktailShop</span>
    </a>

  </div>
  <div className='flex flex-row h-100 items-center'>
  <button onClick={handleClick} className="text-white px-3 py-2 mr-5 rounded-md lg:absolute lg:right-1.5 flex flex-col justify-center items-center">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-5 h-5">
  <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
</svg>
<span className="bg-green-500 mb-7 ml-7 absolute text-white font-bold rounded-full text-xs px-1">{selectedCocktails.reduce((total, cocktail) => total + cocktail.quantity, 0)}</span>
  </button>

  <div className="block lg:hidden">
    <button
    className="flex items-center px-3 py-2 border rounded text-white-200 border-black-400 hover:text-white hover:border-white"
    onClick={() => toggleExpansion(!isExpanded)}
    >
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
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
{show && <div className="rounded-md absolute top-0 right-0"><Cart selectedCocktails={selectedCocktails} removeFromCart={removeFromCart} handleCloseCart={handleCloseCart} updateQuantity={updateQuantity} /></div>}
</div>


  )
}

export default Navigation
