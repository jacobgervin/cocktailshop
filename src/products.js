import React, { useState, useEffect } from 'react';
import ProductDetails from './productdetails';
import { motion } from "framer-motion"

const Products = ({ cocktails, addToCart }) => {
  const [randomCocktails, setRandomCocktails] = useState([]);

  const [selectedCocktail, setSelectedCocktail] = useState();

  const [showDetails, setShowDetails] = useState(false)

  const [isVisible, setIsVisible] = useState(false);

  const handleDetails  = () => {
    setShowDetails(!showDetails)
    setIsVisible(!isVisible)
   };

   const handleCloseDetails = () => {
    setShowDetails(false);
    setIsVisible(false)
  };

  // Shuffle the cocktails array randomly
  useEffect(() => {
    const shuffledCocktails = cocktails.sort(() => 0.5 - Math.random());
    // Get the first 20 cocktails from the shuffled array
    const randomCocktails = shuffledCocktails.slice(0, 20);
    setRandomCocktails(randomCocktails);
  }, [cocktails]);


  
  return (
    <div id='products' className='mt-10 '>
      <div className='w-full flex flex-row px-4 mx-auto lg:ml-5 '>
      </div>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className='text-3xl mb-10 font-extrabold'>PRODUCTS</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {randomCocktails.map((cocktail) => (
            <motion.div
            initial={{x: '-100px', opacity: 0}}
            whileInView={{x: 0, opacity: 100}}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="group relative" key={cocktail.idDrink}>
              <div className="min-h-60 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80 flex flex-col justify-center items-center justify-items-center">
                <img src={cocktail.strDrinkThumb} alt={cocktail.strCategory} className="h-full w-full object-cover object-center lg:h-full lg:w-full"></img>
                <button onClick={() => {setSelectedCocktail(cocktail); handleDetails()}} id='infobutton' className='absolute top-1.5 right-1.5'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-8 h-8">
  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
</svg>
</button>

              </div>
              <div className="mt-4 flex justify-between">
                <div>
                <h3 className="text-left text-white font-bold">
        {cocktail.strDrink}

    </h3>
                  <p className="mt-1 text-sm text-gray-400">{cocktail.strCategory}</p>
                </div>
                <button onClick={() => addToCart(cocktail.idDrink)} type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 cursor-pointer focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      {cocktail.idDrink.substring(0, 2)} $
    <svg aria-hidden="true" class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg></button>
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {showDetails && <div className="rounded-md absolute top-0 right-0"><ProductDetails cocktail={selectedCocktail} addToCart={addToCart} handleCloseDetails={handleCloseDetails} isVisible={isVisible} /></div>}
    </div>
  );
};

export default Products;

