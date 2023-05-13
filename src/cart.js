import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Cart({ selectedCocktails, handleCloseCart, removeFromCart, updateQuantity }) {

  const totalPrice = selectedCocktails.reduce(
    (total, cocktail) => total + parseInt(cocktail.idDrink.substring(0, 2) * (cocktail.quantity)),
    0
  );

  const handleQuantityChange = (cocktailId, newQuantity) => {
    const parsedQuantity = parseInt(newQuantity);
    updateQuantity(cocktailId, parsedQuantity);
  };

  
  return (
      <div className='bg-slate-900/75 h-screen w-screen fixed right-0 flex flex-col justify-center items-center z-50 overflow-y-scroll '>
        <div className='lg:w-[32rem] h-[32rem]  w-fit'>
        <AnimatePresence>
        <motion.div               
            initial={{ x: '-100px',  opacity: 0 } }
            animate={{ x: 0,  opacity: 100 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0 }}
        class="max-w-full mx-5  p-4 bg-white border border-gray-100 rounded-lg shadow sm:p-8 dark:bg-slate-900 dark:border-gray-700">
    <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Cart</h5>
        <button onClick={handleCloseCart}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-6 h-6">
  <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
</svg>
</button>
   </div>
   <div class="flow-root">
        <ul  class="divide-y divide-gray-200 dark:divide-gray-700">
        {selectedCocktails.map((cocktail) => (
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
                        <input
                    className='bg-gray-900 border border-gray-900 focus:ring-blue-500 focus:border-blue-500 p-1 w-14 text-center text-white rounded-lg'
                    type="number"
                    value={cocktail.quantity}
                    onChange={(e) => handleQuantityChange(cocktail.idDrink, e.target.value)}
                    />
                    </div>

                    <div class="inline-flex items-center text-base font-semibold text-white">
                      
                  
                    <p className='mx-2'>x</p> {cocktail.idDrink.substring(0, 2)}$ = {cocktail.quantity * parseInt(cocktail.idDrink.substring(0, 2))}$

                    </div>
                    
                    <button onClick={() => removeFromCart(cocktail.idDrink)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
</button>
                </div>
            </li>

        ))}
        </ul>
        <div className='flex flex-row justify-end w-100'>
        <div>
        <p>Total: {totalPrice} $ </p>
        </div>
        </div>
   </div>
   <button className='w-full bg-white p-2.5 mt-4 text-white rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl '>Procede to Checkout</button>
</motion.div>
</AnimatePresence>

        </div>
      </div>
  );
}

export default Cart;