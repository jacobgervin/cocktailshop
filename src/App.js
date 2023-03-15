import React, { useState, useEffect } from 'react';
import Products from './products';
import Navigation from './nav';
import HeroSection from './hero';




const App = () => {

    const [cocktails, setCocktails] = useState([]);
    const [selectedCocktails, setSelectedCocktails] = useState([]);
  
    useEffect(() => {
      const fetchCocktails = async () => {
        try {
          const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
          const data = await response.json();
          setCocktails(data.drinks);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchCocktails();
    }, []);
  
    const addToCart = (cocktailId) => {
      const selectedCocktail = cocktails.find((cocktail) => cocktail.idDrink === cocktailId);
    
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
    <div>
          <Navigation selectedCocktails={selectedCocktails} cocktails={cocktails} addToCart={addToCart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
        <HeroSection />
      <Products cocktails={cocktails} addToCart={addToCart} />
    </div>
  );
};

export default App;