import React from 'react';

const Products = ({ cocktails, addToCart }) => {

  

  return (
    <div id='products'>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
          {cocktails.map((cocktail) => (
            <div className="group relative" key={cocktail.idDrink}>
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img src={cocktail.strDrinkThumb} alt={cocktail.strCategory} className="h-full w-full object-cover object-center lg:h-full lg:w-full"></img>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                <h3 className="text-sm text-white-700">
      <button type="button" className="text-left text-white font-bold" onClick={() => addToCart(cocktail.idDrink)}>
        {cocktail.strDrink}
      </button>
    </h3>
                  <p className="mt-1 text-sm text-gray-400">{cocktail.strCategory}</p>
                </div>
                <button onClick={() => addToCart(cocktail.idDrink)} type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      {cocktail.idDrink.substring(0, 2)} $
    <svg aria-hidden="true" class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg></button>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    
    </div>
  );
};

export default Products;

