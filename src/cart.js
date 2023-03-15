import React from 'react';

function Cart({ selectedCocktails, handleCloseCart, removeFromCart }) {

  const totalPrice = selectedCocktails.reduce(
    (total, cocktail) => total + parseInt(cocktail.idDrink.substring(0, 2)),
    0
  );
  return (
      <div className='bg-slate-900/75 h-screen w-screen fixed right-0 flex flex-col justify-center items-center z-50 overflow-y-scroll '>
        <div className='lg:w-[32rem] lg:h-[32rem]  w-fit h-fit'>

        <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Cart</h5>
   </div>
   <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
        {selectedCocktails.map((cocktail) => (
            <li key={cocktail.key} class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                        <img class="w-20 h-20 " src={cocktail.strDrinkThumb} alt="Neil image"></img>
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {cocktail.strDrink}
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                        {cocktail.strCategory}
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    {cocktail.idDrink.substring(0, 2)} $
                    </div>
                    <button onClick={() => removeFromCart(cocktail.idDrink)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
</button>
                </div>
            </li>

        ))}
        </ul>
        <div className='flex flex-row justify-space-between w-100 justify-between'>
        <button onClick={handleCloseCart} > close</button>
        <div>
        <p>Total: {totalPrice} $ </p>

        </div>
        </div>
   </div>
</div>

        </div>
      </div>
  );
}

export default Cart;