import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'
const Filter = ({ handleCloseSearch, addToCart, searchCocktails}) => {

    const [filteredCocktails, setFilteredCocktails] = useState([]);
    const [filter, setFilter] = useState('');
    
    const handleSearch = (event) => {
        const searchTerm = event.target.value;
        const filteredCocktails = searchCocktails(searchTerm);
        setFilteredCocktails(filteredCocktails);
      };
  
  return (
    <AnimatePresence>
    <motion.div                
    initial={{ x: '-100px',  opacity: 0 } }
    animate={{ x: 0,  opacity: 100 }}
    transition={{ duration: 0.5 }}
    exit={{ opacity: 0 }}
     className='bg-slate-900 h-screen w-screen fixed right-0 flex flex-col items-center z-50 overflow-y-scroll'> 
    <div className='w-4/5 fixed flex flex-row items-center justify-between bg-slate-900 py-8 '>  
      <input className='text-white bg-slate-800 border-b p-2 focus:outline-none' type="text" placeholder="Search cocktails..."  onChange={handleSearch} />
      <button className='' onClick={handleCloseSearch}>X</button> 
    </div>
      <div className='w-4/5'>
      <ul className='divide-y divide-gray-200 dark:divide-gray-700 mt-20'>
        {filteredCocktails && filteredCocktails.map(cocktail => (
          <AnimatePresence>
            <motion.li
                 initial={{x: '-100px', opacity: 0}}
                 whileInView={{x: 0, opacity: 100}}
                 viewport={{ once: true }}
                 transition={{ duration: 1 }}
            key={cocktail.key} class="py-3 sm:py-4">
            <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                    <img class="w-20 h-20 " src={cocktail.strDrinkThumb} alt={cocktail.strCategory} ></img>
                </div>
                <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {cocktail.strDrink}
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    {cocktail.strCategory}
                    </p>
                </div>

                <div class="inline-flex items-center text-base font-semibold text-white">
                  
               
                <button onClick={() => cocktail && addToCart(cocktail.idDrink)} type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      {cocktail.idDrink.substring(0, 2)} $
    <svg aria-hidden="true" class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg></button>

                </div>
            
            </div>
        </motion.li>
        </AnimatePresence>
        ))}
        {filteredCocktails.length === 0 && (
  <li className="py-3 sm:py-4 text-center">
    <p className="text-sm font-medium text-gray-900 truncate dark:text-white mt-10">
      No results found.
    </p>
  </li>
)}
      </ul>
      </div>
    </motion.div>
    </AnimatePresence>
  );
};

export default Filter;
