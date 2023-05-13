import React, { useState } from 'react';
import Cart from './cart';
import Filter from './filter';
import { Link } from 'react-scroll';





const Navigation = ({ selectedCocktails, removeFromCart, addToCart, updateQuantity, cocktails, handleFilterChange, searchCocktails }) => {
  const [isExpanded, toggleExpansion] = useState(false);

  const [show, setShow] = useState(false);

const [showSearch, setShowSearch] = useState(false)

 const handleSearch  = () => {
  setShowSearch(!showSearch)
 };

 const handleCloseSearch = () => {
  setShowSearch(false);
};

  const handleClick = () => {
    setShow(!show);
  };

  const handleCloseCart = () => {
    setShow(false);
  };
  
  

  return (
 <div className='relative z-40'>
    <div className='flex flex-row fixed bg-[#04162E] '>
    <nav className="flex items-center justify-between flex-wrap bg-[#04162E] p-6 w-screen">
  <div className="flex items-center flex-shrink-0 text-white mr-6">
    
    <a href="/" class="flex items-center cursor-pointer ">
    <svg  fill="#fff" className='h-5 w-5 hover:fill-purple-600 hover:stroke-purple-600' viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#fff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>drink3</title> <path d="M26.562 8.021l-10.496 9.213v11.939l5.841 2.827h-13.689l5.842-2.826v-11.94l-10.622-9.213h16.202l3.243-5.619 0.872 0.503-2.953 5.115h5.76zM24.111 8.965l-3.863 0.015-1.19 2.062h2.745l2.308-2.077zM16.066 15.069c0.591 0 1.069-0.479 1.069-1.070s-0.479-1.070-1.069-1.070-1.070 0.479-1.070 1.070c0 0.592 0.48 1.070 1.070 1.070zM5.89 8.965l2.327 2.077h9.679l1.188-2.057-13.194-0.020z"></path> </g></svg>
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white ml-2">CocktailShop</span>
    </a>
  </div>
  <div className='flex flex-row h-100 items-center'>
  <button onClick={handleClick} className="text-white px-3 py-2 sm:ml-5 md:ml-6 rounded-md lg:absolute lg:right-8 flex flex-col justify-center items-center">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-5 h-5 hover:fill-purple-600">
  <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
</svg>
<span className="bg-green-500 mb-7 ml-7 absolute text-white font-bold rounded-full text-xs px-1">{selectedCocktails.reduce((total, cocktail) => total + cocktail.quantity, 0)}</span>
  </button>
  <a href className="text-white px-3 py-2 sm:ml-5 md:ml-6 rounded-md lg:absolute lg:right-16 flex flex-col justify-center items-center" onClick={handleSearch}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-6 h-6 hover:fill-purple-600">
  <path d="M8.25 10.875a2.625 2.625 0 115.25 0 2.625 2.625 0 01-5.25 0z" />
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.125 4.5a4.125 4.125 0 102.338 7.524l2.007 2.006a.75.75 0 101.06-1.06l-2.006-2.007a4.125 4.125 0 00-3.399-6.463z" clip-rule="evenodd" />
</svg>


      </a>

  <div className="block lg:hidden">
    <button
    className="flex items-center px-3 py-2  rounded text-white-200 border-black-400 hover:text-white "
    onClick={() => toggleExpansion(!isExpanded)}
    >
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
</svg>
    </button>
  </div>
  </div>
  <div  className={`${
            isExpanded ? `block` : `hidden`
          } bg-[#100D0E] w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
    <div className="text-sm lg:flex-grow bg-[#04162E]">
      <Link to="products" smooth={true} duration={500} className="block mt-4 cursor-pointer lg:inline-block lg:mt-0 text-white-200 hover:text-white mr-4 font-bold lg:font-normal">
Products
      </Link>
      <a href="#responsive-header" className="block mt-4 lg:inline-block cursor-pointer lg:mt-0 text-white-200 hover:text-white mr-4 font-bold lg:font-normal">
       About
      </a>
      
    </div>
  </div>


</nav>
</div>
{show && <div className="rounded-md absolute top-0 right-0"><Cart selectedCocktails={selectedCocktails} removeFromCart={removeFromCart} handleCloseCart={handleCloseCart} updateQuantity={updateQuantity} /></div>}
{showSearch && <div className="rounded-md absolute top-0 right-0"><Filter handleCloseSearch={handleCloseSearch} addToCart={addToCart} cocktails={cocktails} handleFilterChange={handleFilterChange} searchCocktails={searchCocktails} /></div>}

</div>


  )
}

export default Navigation
