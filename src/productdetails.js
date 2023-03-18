import React from 'react';


function ProductDetails({ cocktail, handleCloseDetails, addToCart }) {

    const ingredients = [];

    // Loop through each ingredient property and add it to the ingredients array
    for (let i = 1; i <= 15; i++) {
        if (cocktail['strIngredient' + i]) {
            ingredients.push(cocktail['strIngredient' + i]);
        } else {
            break;
        }
    }

    return (
      <div className='bg-slate-900 h-screen w-screen fixed right-0 flex flex-col lg:justify-center lg:items-center z-50'>
         <button className='absolute top-4 right-4' onClick={handleCloseDetails}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-6 h-6">
  <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
</svg>
</button>
            <div class="flex lg:flex-row flex-col p-5 overflow-y-scroll">
                
                <div class="flex-shrink-0">
                    <img class="w-full h-80 " src={cocktail.strDrinkThumb} alt={cocktail.strCategory} ></img>
                </div>
                <div class="flex-1 ml-0 lg:ml-5 min-w-0" >
                    <p class="text-2xl mt-3 md:mt-0 font-extrabold text-gray-900 truncate dark:text-white">
                    {cocktail.strDrink}
                    </p>
                    <p class="text-sm mt-3 text-gray-500 truncate dark:text-gray-400">
                    {cocktail.strCategory}
                    </p>
                    <p class="text-sm mt-2 text-gray-500 dark:text-gray-400 max-w-sm">
                    {cocktail.strInstructions}
                    </p>
                    <div className='flex flex-col mt-3'>
                        <p className='font-bold'>Ingredients:</p>
                    <ul className='mt-2'>
                        {ingredients.map((ingredient, index) => (
                            <li key={index} class="text-sm text-white truncate">
                                {ingredient}
                            </li>
                        ))}
                    </ul>
                    <div class="inline-flex items-center text-base font-semibold text-white mt-4">
                  
               
                  <button onClick={() => addToCart(cocktail.idDrink)}  type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        {cocktail.idDrink.substring(0, 2)} $
      <svg aria-hidden="true" class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg></button>
  
                  </div>
                    </div>
                </div>

            </div>
      </div>
    );
  }

export default ProductDetails;