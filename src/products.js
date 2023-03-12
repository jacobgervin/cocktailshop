import React, { useState, useEffect } from 'react';

const Products = () => {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    const fetchCocktails = async () => {
      try {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
        const data = await response.json();
        setCocktails(data.drinks.slice(0, 10));
      } catch (error) {
        console.error(error);
      }
    };

    fetchCocktails();
  }, []);

  return (
<div className="bg-black">
  <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
  <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {cocktails.map((cocktail) => (

<div className="group relative">
  <div key={cocktail.idDrink} className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
    <img src={cocktail.strDrinkThumb} alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full"></img>
  </div>
  <div className="mt-4 flex justify-between">
    <div>
      <h3 className="text-sm text-white-700">
        <a href="/">
          <span aria-hidden="true" className="absolute inset-0"></span>
          {cocktail.strDrink}
        </a>
      </h3>
      <p className="mt-1 text-sm text-white-500">Black</p>
    </div>
    <p className="text-sm font-medium text-white-900">$35</p>
    <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Add to cart</button>
  </div>
  </div>



        ))}

        </div>
      </div>
</div>
  );
};

export default Products;
