import React, { useState, useEffect } from 'react';
import Products from './products';
import Navigation from './nav';
import HeroSection from './hero';
import Filter from './filter';


const App = () => {
  const [cocktails, setCocktails] = useState([]);
  const [selectedCocktails, setSelectedCocktails] = useState([]);

  
  useEffect(() => {
    const fetchCocktails = async () => {
      const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
      const allCocktails = [];
      
      for (let i = 0; i < alphabet.length; i++) {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${alphabet[i]}`);
        const data = await response.json();
        
        if (data.drinks) {
          allCocktails.push(...data.drinks);
        }
      }
      
      setCocktails(allCocktails);
    };
    
    fetchCocktails();
  }, []);


  const searchCocktails = (searchTerm) => {
    const filteredCocktails = cocktails.filter(cocktail => {
      return cocktail.strDrink.toLowerCase().includes(searchTerm.toLowerCase());
    });
    
    return filteredCocktails;
  };
  
 

  const addToCart = (cocktailId) => {
    const selectedCocktail = cocktails.find((cocktail) => cocktail.idDrink === cocktailId);
    
    // Add a check to make sure the selectedCocktail variable is not undefined
    if (!selectedCocktail) {
      console.error(`Cocktail with id ${cocktailId} not found.`);
      return;
    }

    // Check if the selected cocktail already exists in the cart
    const existingCocktailIndex = selectedCocktails.findIndex((cocktail) => cocktail.idDrink === cocktailId);

    if (existingCocktailIndex >= 0) {
      // If the cocktail already exists, update its quantity
      const updatedCocktails = [...selectedCocktails];
      updatedCocktails[existingCocktailIndex].quantity += 1;
      setSelectedCocktails(updatedCocktails);
    } else {
      // If the cocktail doesn't exist, add it to the cart
      setSelectedCocktails((prevSelectedCocktails) => [
        ...prevSelectedCocktails,
        { ...selectedCocktail, key: `selectedCocktail_${selectedCocktail.idDrink}`, quantity: 1 }
      ]);
    }
    
  };
    
  

    const removeFromCart = (cocktailId) => {
      setSelectedCocktails((prevSelectedCocktails) => prevSelectedCocktails.filter((cocktail) => cocktail.idDrink !== cocktailId));
    };
    
    const updateQuantity = (cocktailId, newQuantity) => {
      setSelectedCocktails(prevSelectedCocktails => {
        const index = prevSelectedCocktails.findIndex(cocktail => cocktail.idDrink === cocktailId);
        const updatedCocktails = [...prevSelectedCocktails];
        updatedCocktails[index].quantity = newQuantity;
        return updatedCocktails;
      });
    };
  
  
    
  return (
    <div className='bg-[#04162E]'>
          <Navigation selectedCocktails={selectedCocktails} cocktails={cocktails} addToCart={addToCart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} searchCocktails={searchCocktails}/>
        <HeroSection />
      <Products cocktails={cocktails} addToCart={addToCart} />
      <Filter />
    </div>
  );
};

export default App;