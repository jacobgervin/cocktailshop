import React from 'react';

const Products = ({ cocktails, addToCart }) => {

  return (
    <div className="bg-black">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {cocktails.map((cocktail) => (
            <div className="group relative" key={cocktail.idDrink}>
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img src={cocktail.strDrinkThumb} alt="Front of men's Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full"></img>
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
                <p className="text-sm font-medium text-white-900">{cocktail.idDrink.substring(0, 2)} $</p>
                <button onClick={() => addToCart(cocktail.idDrink)} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;

