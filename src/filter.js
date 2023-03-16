import React, { useState, useEffect } from 'react';

const Filter = ({ handleCloseSearch, addToCart}) => {

    const [filteredCocktails, setFilteredCocktails] = useState([]);
    const [filter, setFilter] = useState('');
    
    useEffect(() => {
      const fetchCocktails = async () => {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${filter}`);
        const data = await response.json();
        setFilteredCocktails(data.drinks);
      };
      
      fetchCocktails();
    }, [filter]);
  
    
    const handleFilterChange = event => {
      setFilter(event.target.value);
    };
  
  return (
    <div className='bg-slate-900 h-screen w-screen fixed right-0 flex flex-col items-center z-50 overflow-y-scroll'> 
          <button className='absolute right-3.5 top-3.5' onClick={handleCloseSearch}>X</button>   
      <input className='text-black mt-10' type="text" placeholder="Search cocktails..." value={filter} onChange={handleFilterChange} />
      <div className='w-4/5'>
      <ul className='divide-y divide-gray-200 dark:divide-gray-700'>
        {filteredCocktails && filteredCocktails.map(cocktail => (
            <li key={cocktail.key} class="py-3 sm:py-4">
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
        </li>
        ))}
        {!filteredCocktails && <p>No results found.</p>}
      </ul>
      </div>
    </div>
  );
};

export default Filter;
